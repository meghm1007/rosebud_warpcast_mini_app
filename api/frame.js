// Netlify serverless function for handling Warpcast frame requests
exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle OPTIONS request (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Return frame information with correct URLs
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      frame: {
        version: '1',
        name: '1024',
        iconUrl: 'YOUR_NETLIFY_URL/images/icon.png',
        homeUrl: 'YOUR_NETLIFY_URL/frame.html',
        imageUrl: 'YOUR_NETLIFY_URL/images/banner.png',
        buttonTitle: 'Play 1024',
        splashImageUrl: 'YOUR_NETLIFY_URL/images/splash.png',
        splashBackgroundColor: '#180822',
        subtitle: 'Surf the sky and collect coins',
        description: 'A fun game where you surf the sky and collect coins!',
        primaryCategory: 'games',
        heroImageUrl: 'YOUR_NETLIFY_URL/images/banner.png',
        tagline: 'Surf, collect, score big!',
        ogTitle: '1024 - Addictive Sky Surfing Game',
        ogDescription: 'Play 1024 and surf through the sky collecting coins in this addictive mini-game!',
        ogImageUrl: 'YOUR_NETLIFY_URL/images/banner.png',
        screenshotUrls: [
          'YOUR_NETLIFY_URL/images/banner.png'
        ],
        noIndex: false
      }
    })
  };
}