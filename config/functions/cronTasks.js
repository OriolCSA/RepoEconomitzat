// path: config/functions/cron.js

module.exports = {
 "*/30 * * * * *": ({strapi}) => {
    console.log("crone executada");
  },
};
