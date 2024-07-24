// config/functions/cron.js
module.exports = {
 "*/5 * * * * *": ({ strapi }) => {
    console.log("Cron job executed");
  },
};
