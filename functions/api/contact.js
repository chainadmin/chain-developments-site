export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const topic = formData.get("topic")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Name, email, and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await env.DB.prepare(
      "INSERT INTO leads (name, email, phone, topic, message) VALUES (?, ?, ?, ?, ?)"
    )
      .bind(name, email, phone || null, topic || null, message)
      .run();

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: error.message || "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
