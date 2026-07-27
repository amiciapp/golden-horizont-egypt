#!/bin/bash
# zip-project.sh — Create deployment ZIP on your LOCAL computer
# Run this from the project root on YOUR machine

echo "Creating deployment ZIP..."

# Remove old build artifacts
rm -rf .next node_modules

# Create ZIP (exclude what's not needed)
zip -r ../golden-horizont-deploy.zip . \
  -x ".opencode/*" \
  -x ".git/*" \
  -x "node_modules/*" \
  -x ".next/*" \
  -x "AUDIT.md" \
  -x "deploy.sh" \
  -x "DEPLOY.md" \
  -x "zip-project.sh" \
  -x ".DS_Store" \
  -x "Thumbs.db"

echo "✅ Created: ../golden-horizont-deploy.zip"
echo ""
echo "Upload this file to Hostinger File Manager → public_html/"
echo "Then extract it there."
