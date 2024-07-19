'use strict';

const populateProveidor = require('../../../../config/populateProveidor');

module.exports = {
  async populate(ctx) {
    try {
      await populateProveidor();
      ctx.send({ message: 'Proveidors collection populated successfully.' });
    } catch (err) {
      ctx.send({ error: 'Error populating Proveidors collection.' });
    }
  },
};
