# Deploy to Hostinger — Golden Horizont Egypt

## Prerequisites
- Hostinger hosting plan with Node.js support
- SSH access enabled (or Terminal in hPanel)
- Git installed on Hostinger (usually pre-installed)

---

## Step 1: Remove WordPress (via hPanel)

1. Login to **hPanel** → your hosting account
2. **Files → File Manager** → open `public_html/`
3. **Select All → Delete** (remove wp-admin, wp-content, wp-includes, etc.)
4. **Databases → MySQL Databases** → delete the WordPress database
5. **Databases → phpMyAdmin** → drop all WordPress tables

---

## Step 2: Create Node.js App (via hPanel)

1. **Advanced → Node.js**
2. Click **Create Application**
3. Set:
   - **Node.js version**: 20.x (or latest)
   - **Application root**: `public_html`
   - **Application URL**: your domain (e.g. goldenhorizontegypt.com)
4. Click **Create**
5. Note the **application URL** shown — this is your site

---

## Step 3: Upload Files

### Option A: Git (RECOMMENDED)

SSH into your server, then:
```bash
cd ~/public_html

# Clone your repo (replace with your GitHub URL)
git clone https://github.com/YOUR_USERNAME/golden-horizont-egypt.git .

# If repo is private:
# git clone https://YOUR_GITHUB_TOKEN@github.com/YOUR_USERNAME/golden-horizont-egypt.git .
```

### Option B: File Manager Upload

1. On your LOCAL computer, create a ZIP of the project:
   - Include: `app/`, `components/`, `lib/`, `public/`, `next.config.mjs`, `package.json`, `tsconfig.json`, `postcss.config.mjs`, `tailwind.config.ts`
   - EXCLUDE: `node_modules/`, `.next/`, `.opencode/`, `.git/`
2. Upload the ZIP to `public_html/` via File Manager
3. Extract the ZIP

---

## Step 4: Install & Build on Server

SSH into server or use hPanel Terminal:
```bash
cd ~/public_html

# Install dependencies
npm install

# Build for production
npm run build

# Start the server
npm start
```

---

## Step 5: Process Manager (Keep App Running)

```bash
# Install PM2 globally (if not already)
npm install -g pm2

# Start with PM2
cd ~/public_html
pm2 start npm --name "golden-horizont" -- start

# Save PM2 config (auto-restart on reboot)
pm2 save
pm2 startup

# Check status
pm2 status
pm2 logs golden-horizont
```

---

## Step 6: SSL Certificate

1. hPanel → **Security → SSL**
2. Select your domain
3. Install **Let's Encrypt** (free)
4. Enable **Force HTTPS**

---

## Step 7: Domain DNS (if needed)

If your domain is already pointed to Hostinger (from WordPress), skip this.

Otherwise:
1. hPanel → **Domains → Manage DNS**
2. Set:
   - **A Record**: `@` → Hostinger server IP
   - **CNAME**: `www` → your domain

---

## Environment Variables

This project has NO required environment variables.
All data is hardcoded in `lib/trips.ts` and `lib/translations.ts`.
No database connection needed.

---

## Troubleshooting

### App stops running
```bash
pm2 restart golden-horizont
```

### Build fails
```bash
# Check Node.js version
node -v   # Should be 20.x+

# Clean and rebuild
rm -rf node_modules .next
npm install
npm run build
```

### Port already in use
```bash
pm2 delete golden-horizont
pm2 start npm --name "golden-horizont" -- start
```

### Check logs
```bash
pm2 logs golden-horizont --lines 50
```

---

## Files to Upload

```
golden-horizont-egypt/
├── app/                    # Next.js pages & API routes
├── components/             # React components
├── lib/                    # Utilities, translations, trips data
├── public/                 # Static assets (photos, logo, video)
│   └── photos/             # Gallery photos (148 MB)
├── next.config.mjs         # Next.js config
├── package.json            # Dependencies
├── package-lock.json       # Lock file
├── tsconfig.json           # TypeScript config
├── postcss.config.mjs      # PostCSS config
└── tailwind.config.ts      # Tailwind config
```

**DO NOT upload:**
- `node_modules/`
- `.next/`
- `.opencode/`
- `.git/`
- `AUDIT.md`
- `DEPLOY.md`
