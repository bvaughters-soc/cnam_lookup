const https = require('https');

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing ?q= parameter' });
  }

  // Validate: digits only, reasonable length
  if (!/^\d{7,15}$/.test(q)) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }

  const targetUrl = `https://freecnam.org/dip?q=${encodeURIComponent(q)}`;

  try {
    const cnam = await fetchCnam(targetUrl);
    res.status(200).send(cnam || '');
  } catch (err) {
    res.status(502).json({ error: 'Upstream fetch failed: ' + err.message });
  }
}

function fetchCnam(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => resolve(data.trim()));
    }).on('error', reject);
  });
}
