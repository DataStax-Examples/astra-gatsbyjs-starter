const fetch = require('cross-fetch');

module.exports = getAstraToken = async () => {
  return await fetch(`https://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v1/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: process.env.ASTRA_DB_USERNAME,
      password: process.env.ASTRA_DB_PASSWORD
    })
  }).then(res => {
    if (res.status >= 400) {
      throw new Error('Could not generate Astra credentials');
    }
    return res.json()
  }).then(body => {
    if (!body || !body.authToken) {
      throw new Error('Could not generate Astra credentials');
    }
    return body.authToken;
  });
}
