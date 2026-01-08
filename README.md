# Chain Software Group Link Hub

A static link-hub and contact site for Chain Software Group, built with plain HTML, CSS, and JavaScript.

## Deploy to Cloudflare Pages (GitHub)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages** → **Create application** → **Pages**.
3. Select **Connect to Git**, choose your repo, and configure:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
4. Save and deploy. Cloudflare will build on every push.

## Create the D1 database

1. In Cloudflare, go to **Workers & Pages** → **D1** → **Create database**.
2. Name it (example: `chain-leads`).
3. Run the schema below (Cloudflare dashboard or `wrangler d1 execute`).

```sql
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  topic TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Bind the D1 database to Pages Functions

1. Open your Pages project in Cloudflare.
2. Go to **Settings** → **Functions** → **D1 database bindings**.
3. Add a binding:
   - **Variable name:** `DB`
   - **D1 database:** select the database you created.
4. Save changes. The contact form will now write to the `leads` table.
