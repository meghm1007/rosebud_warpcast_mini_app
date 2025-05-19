# Warpcast Mini-App

<div align="center">
  <img src="images/banner.png" alt="1024 Game Banner" width="600"/>
</div>

## Overview

This repository contains a ready-to-deploy Warpcast Mini-App. You can convert a vibe-coded game on Rosebud AI into your own mini-app own Warpcast/Farcaster

## Prerequisites

- GitHub account (for cloning the repository)
- Netlify account (for deployment)
- Warpcast account (for Mini-App setup)
- Rosebud AI game URL

## Deployment Guide

### Step 1: Get the Code

Clone the repository:
```bash
git clone https://github.com/meghm1007/rosebud_warpcast_mini_app.git
cd rosebud_warpcast_mini_app
```

<div align="center">
  <img src="gif_1_git.gif" alt="Git Clone Process" width="600"/>
</div>

### Step 2: Update the TODO Items

Several files contain TODO comments that indicate what you need to change:

1. **index.html** - Look for these TODO comments:
   ```html
   <!-- TODO: CHANGE TITLE OF THE GAME -->
   <!-- TODO: CHANGE NETLIFY URL -->
   <!-- TODO: CHANGE DESCRIPTION OF THE GAME -->
   ```

2. **frame.html** - Look for these TODO comments:
   ```html
   <!-- TODO: CHANGE TITLE OF THE GAME -->
   <!-- TODO: ADD YOUR NETLIFY URL -->
   <!-- TODO: CHANGE DESCRIPTION OF THE GAME -->
   ```
   
   And in the script section:
   ```javascript
   //TODO: CHANGE THESE VALUES
   //TODO: ADD YOUR ROSEBUD GAME URL
   //TODO: CHANGE THE GAME TITLE AND DESCRIPTION
   //TODO: CHANGE THE BUTTONS TEXT AND ICONS
   ```

3. **api/frame.js** - Replace all occurrences of `YOUR_NETLIFY_URL` with your actual Netlify URL.

### Step 3: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Sign in or create an account
3. Click "Add new site" > "Deploy manually"
4. Drag and drop this entire folder onto the Netlify dashboard
5. Wait for deployment to complete
6. Copy your new Netlify URL (e.g., `random-name-123456.netlify.app`)

### Step 4: Update Configuration Files

After getting your Netlify URL, go back and update all the instances of `YOUR_NETLIFY_URL` in your files.

> **💡 Pro Tip:** Use your editor's search and replace functionality to quickly replace all placeholder values:
> - Windows/Linux: `Ctrl + Shift + F` 
> - Mac: `Command + Shift + F`
> - Search for `YOUR_NETLIFY_URL` and replace all instances with your actual Netlify URL
> - Do the same for `YOUR_ROSEBUD_GAME_URL` and replace it with the actual Rosebud link

Replace placeholder values in the **index.html**, **frame.html**, and **api/frame.js**👆🏻

 **Images** (Optional):
   - Update images in the `/images` folder as needed
   - Recommended image sizes:
     - icon.png: 512x512px (square)
     - banner.png: 1200x630px (1.91:1 ratio)
     - splash.png: 1200x1200px (square)

### Step 5: Generate Account Association Values

1. Go to [Warpcast Developers Mini Apps Manifest Tool](https://warpcast.com/~/developers/mini-apps/manifest)
2. Enter your Netlify URL (e.g., `random-name-123456.netlify.app`)
3. Click "Verify Domain"
4. Scan the QR code with your Warpcast mobile app
5. This will generate your accountAssociation values
6. Copy the generated values and update `.well-known/farcaster.json`:
   ```json
   "accountAssociation": {
     "header": "YOUR_ACCOUNT_ASSOCIATION_HEADER",
     "payload": "YOUR_ACCOUNT_ASSOCIATION_PAYLOAD",
     "signature": "YOUR_ACCOUNT_ASSOCIATION_SIGNATURE"
   }
   ```

### Step 6: Final Deployment

After updating all the configuration files, redeploy your project to Netlify using the same process as in Step 2.

### Step 7: Test and Publish Your Mini-App

1. Go to [Warpcast Developers Mini Apps Debug Tool](https://warpcast.com/~/developers/mini-apps/debug)
2. Enter your Netlify URL
3. Click "Preview" to test your mini-app
4. If everything works correctly, click "Add to Warpcast"
5. Your mini-app is now available in the Warpcast store!

## Sharing Your Mini-App

Create a new cast on Warpcast and paste your mini-app URL (your Netlify URL). When users click on the link, they'll be able to access and use your mini-app.

## Troubleshooting

### Common Issues and Solutions

- **Embed Not Present / Embed Not Valid errors:**
  - Make sure your `fc:frame` meta tags are correctly formatted
  - Check that all URLs in the meta tags are absolute and pointing to your Netlify domain
  - Verify that the version number is correct (use "1" for standard frames)

- **Game doesn't load:**
  - Confirm your Rosebud game URL is correct
  - Check browser console for any JavaScript errors
  - Ensure the iframe has the correct permissions set

- **Images not showing:**
  - Verify that your image paths in the HTML files are correct
  - Make sure all images are uploaded to the `/images` folder
  - Check that the images are not too large (should be under 10MB)

- **Farcaster account association issues:**
  - Regenerate the association values using the Warpcast Developer tools
  - Verify that the `.well-known/farcaster.json` file is correctly formatted
  - Make sure the domain you're verifying matches exactly with your Netlify domain

- **Deployment issues:**
  - After updating files locally, make sure to redeploy to Netlify
  - Check Netlify deployment logs for any errors
  - Clear browser cache or try in an incognito window to see the latest changes

### Debugging Tools

- Use the [Farcaster Frame Validator](https://warpcast.com/~/developers/frames) to check your frame format
- Use browser developer tools to inspect network requests and JavaScript errors
- Test your mini-app in the [Warpcast Debug Tool](https://warpcast.com/~/developers/mini-apps/debug) before publishing

## Advanced Customization

### Completely Redesign Your Mini-App

You can completely change the look and feel of your mini-app:

1. **Custom CSS Styling:**
   - Modify the `<style>` section in frame.html to change colors, fonts, and layouts
   - Add animations or transitions for a more polished feel
   - Customize the loading overlay and game instructions

2. **Vibe-Coding the Design:**
   - Take your existing repo and use AI tools to transform the design completely
   - Example prompt: "Transform this game into a cyberpunk-themed experience with neon colors and futuristic UI elements"
   - Update the CSS variables at the top of the stylesheet to quickly change theme colors

3. **Custom Functionality:**
   - Modify the script section in frame.html to add new features
   - Add custom animations, sound effects, or game mechanics
   - Implement additional screens or modal popups

4. **Different Game Integration:**
   - You can replace the Rosebud game with any other iframe-compatible game or app
   - Adjust the iframe permissions and attributes as needed for your specific integration
   - Change the button controls to match your new game's mechanics

### Extending The Mini-App

- Add user authentication using Farcaster's authentication features
- Implement leaderboards or social features
- Create multiple game modes or levels
- Add sound effects or background music

## Resources

- [Farcaster Mini Apps Documentation](https://miniapps.farcaster.xyz/)
- [Warpcast Developers Portal](https://warpcast.com/~/developers)
- [Netlify Documentation](https://docs.netlify.com/)
- [Rosebud AI Documentation](https://docs.rosebud.ai)

## Acknowledgments

- Rosebud AI
- Warpcast/Farcaster
- Netlify