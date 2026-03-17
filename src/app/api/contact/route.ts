import { NextResponse } from "next/server";

/**
 * Contact form → Formspree (no API key, no domain verification).
 * Create two forms at formspree.io (one for each email), add the form IDs to .env.
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, checkIn, checkOut, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const raw = [
      process.env.FORMSPREE_FORM_ID_1,
      process.env.FORMSPREE_FORM_ID_2,
    ].filter(Boolean) as string[];
    const formIds = raw.map((id) => {
      const match = id.match(/formspree\.io\/f\/([a-z0-9]+)/i) ?? id.match(/^([a-z0-9]+)$/i);
      return match ? match[1] : id;
    });

    if (formIds.length === 0) {
      return NextResponse.json(
        { error: "Add FORMSPREE_FORM_ID_1 (and optionally FORMSPREE_FORM_ID_2) to .env — create forms at formspree.io" },
        { status: 500 }
      );
    }

    const payload = {
      name,
      email,
      phone: phone || undefined,
      "check-in": checkIn || undefined,
      "check-out": checkOut || undefined,
      message: message || undefined,
    };

    const results = await Promise.all(
      formIds.map((id) =>
        fetch(`https://formspree.io/f/${id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      )
    );

    const failed = results.some((r) => !r.ok);
    if (failed) {
      const firstBad = results.find((r) => !r.ok);
      const err = await firstBad?.json().catch(() => ({}));
      return NextResponse.json(
        { error: err?.error ?? "Failed to send" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
