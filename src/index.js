const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const handleContact = async (request, env) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  if (!env.DB) {
    return jsonResponse(
      { ok: false, error: "Database binding not configured." },
      500
    );
  }

  try {
    const formData = await request.formData();
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const topic = formData.get("topic")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      return jsonResponse(
        { ok: false, error: "Name, email, and message are required." },
        400
      );
    }

    await env.DB.prepare(
      "INSERT INTO leads (name, email, phone, topic, message) VALUES (?, ?, ?, ?, ?)"
    )
      .bind(name, email, phone || null, topic || null, message)
      .run();

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse(
      { ok: false, error: error.message || "Server error" },
      500
    );
  }
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      return handleContact(request, env);
    }

    if (!env.ASSETS) {
      return new Response("Asset binding not configured.", { status: 500 });
    }

    return env.ASSETS.fetch(request);
  },
};
