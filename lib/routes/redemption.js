var api = require('../api/redemption');

module.exports = [
  {
    method: 'GET',
    path: '/api/redemptions',
    handler: api.redemptions.all
  }
];