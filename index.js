const got = require('got');
const COUPON_URL = 'https://akool.com/?via=amine-menad';

(async () => {
  try {
    const r = await got.head(COUPON_URL, { followRedirect: false, throwHttpErrors: false });
    console.log(`Deal page status: ${r.statusCode}`);
    if (r.headers.location) console.log(`Redirect: ${r.headers.location}`);
  } catch (e) { console.log('Deal page check skipped (expected redirect).'); }

  console.log('\n--- Akool API Simulation ---');
  console.log('Use cases: face-swap, talking avatar, background editing, batch personalization');
  if (process.env.AKOOL_API_KEY) {
    console.log('API key detected. Ready for face-swap generation.');
  } else {
    console.log('Set AKOOL_API_KEY env var to enable live API calls.');
  }
})();
