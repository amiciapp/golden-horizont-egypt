#!/bin/bash
# deploy.sh — Run this on Hostinger server via SSH
# Usage: bash deploy.sh

set -e

echo "========================================="
echo " Golden Horizont Egypt — Deployment"
echo "========================================="

# Navigate to project root
cd ~/public_html

echo ""
echo "[1/5] Installing dependencies..."
npm install

echo ""
echo "[2/5] Building for production..."
npm run build

echo ""
echo "[3/5] Setting up PM2 process manager..."
npm install -g pm2 2>/dev/null || true
pm2 delete golden-horizont 2>/dev/null || true
pm2 start npm --name "golden-horizont" -- start
pm2 save
pm2 startup

echo ""
echo "[4/5] Checking app status..."
sleep 3
pm2 status

echo ""
echo "[5/5] Testing site..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
if [ "$HTTP_CODE" = "200" ]; then
  echo "✅ Site is running! HTTP $HTTP_CODE"
else
  echo "⚠️  Site returned HTTP $HTTP_CODE — check pm2 logs"
fi

echo ""
echo "========================================="
echo " Deployment complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "  1. Install SSL via hPanel → Security → SSL"
echo "  2. Force HTTPS redirect"
echo "  3. Visit your domain to verify"
echo ""
echo "Useful commands:"
echo "  pm2 status              — check app status"
echo "  pm2 logs golden-horizont — view logs"
echo "  pm2 restart golden-horizont — restart app"
