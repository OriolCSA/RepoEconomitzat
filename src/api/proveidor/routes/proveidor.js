'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/proveidors',
      handler: 'proveidor.find', // Ensure this handler exists
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/proveidors',
      handler: 'proveidor.create', // Ensure this handler exists
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // Add other routes as necessary
  ],
};
