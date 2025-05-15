# 1024 - Warpcast Mini-App Setup Guide

This guide will help you set up and deploy the 1024 game as a Warpcast Mini-App.

## Step 1: Get the Code
Clone the repository:
```
git clone https://github.com/meghm1007/rosebud_warpcast_mini_app.git
cd rosebud_warpcast_mini_app
```

## Step 2: Initial Deployment to Netlify
1. Go to [Netlify](https://app.netlify.com/)
2. Sign in or create an account
3. Click "Add new site" > "Deploy manually"
4. Drag and drop this entire folder onto the Netlify dashboard
5. Wait for deployment to complete
6. Copy your new Netlify URL (e.g., random-name-123456.netlify.app)

## Step 3: Update Configuration Files
Replace placeholder values in the following files:

1. **index.html**:
   - Replace all instances of `YOUR_NETLIFY_URL` with your actual Netlify URL

2. **frame.html**:
   - Replace all instances of `YOUR_NETLIFY_URL` with your actual Netlify URL
   - Replace `YOUR_ROSEBUD_GAME_URL` with your Rosebud game URL
     - You can get a Rosebud game URL from [rosebud.ai](https://rosebud.ai)

3. **api/frame.js**:
   - Replace all instances of `YOUR_NETLIFY_URL` with your actual Netlify URL

4. **Images** (Optional):
   - Update images in the `/images` folder as needed
   - Recommended image sizes (based on Farcaster Mini Apps documentation):
     - icon.png: 512x512px (square)
     - banner.png: 1200x630px (1.91:1 ratio)
     - splash.png: 1200x1200px (square)

## Step 4: Re-deploy to Netlify
1. Go to [Netlify](https://app.netlify.com/)
2. Sign in to your account
3. Click "Add new site" > "Deploy manually"
4. Drag and drop your updated folder onto the Netlify dashboard
5. Wait for deployment to complete

## Step 5: Generate Account Association Values
1. Go to [Warpcast Developers Mini Apps Manifest Tool](https://warpcast.com/~/developers/mini-apps/manifest)
2. Enter your Netlify URL (e.g., random-name-123456.netlify.app)
3. Click "Verify Domain"
4. Scan the QR code with your Warpcast mobile app
5. This will generate your accountAssociation values
6. Copy the generated values

## Step 6: Update Farcaster Configuration
1. Open `.well-known/farcaster.json`
2. Replace the placeholder values with your actual values:
   ```json
   "accountAssociation": {
     "header": "YOUR_ACCOUNT_ASSOCIATION_HEADER",
     "payload": "YOUR_ACCOUNT_ASSOCIATION_PAYLOAD",
     "signature": "YOUR_ACCOUNT_ASSOCIATION_SIGNATURE"
   }
   ```

## Step 7: Final Deployment
1. Go to [Netlify](https://app.netlify.com/)
2. Sign in to your account
3. Click "Add new site" > "Deploy manually"
4. Drag and drop your updated folder onto the Netlify dashboard
5. Wait for deployment to complete

## Step 8: Test and Publish Your Mini-App
1. Go to [Warpcast Developers Mini Apps Debug Tool](https://warpcast.com/~/developers/mini-apps/debug)
2. Enter your Netlify URL
3. Click "Preview" to test your mini-app
4. If everything works correctly, click "Add to Warpcast"
5. Your mini-app is now available in the Warpcast store!

## Step 9: Share Your Mini-App
1. Open Warpcast
2. Create a new cast
3. Paste your mini-app URL (your Netlify URL)
4. Post the cast to share your mini-app with others

## Troubleshooting
- If your mini-app doesn't appear correctly, check that all URLs have been properly updated
- Make sure your `.well-known/farcaster.json` file is accessible at your domain
- Verify that your accountAssociation values are correct
- Check that your images are properly sized and accessible

For more information, visit the [Farcaster Mini Apps documentation](https://miniapps.farcaster.xyz/).
