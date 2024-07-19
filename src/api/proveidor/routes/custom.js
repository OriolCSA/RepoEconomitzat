module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/proveidor/populate',
      handler: 'proveidor.populate',
      config: {
        auth: false,
      },
    },
  ],
};
