const sql = require('mssql');

module.exports = async () => {
  const config = {
    user: 'sa', // replace with your SQL Server username
    password: '123', // replace with your SQL Server password
    server: 'DESKTOP-EM96T5M\\MSSQLSERVER02', // replace with your server name
    database: 'CCAndorra', // replace with your database name
    options: {
      encrypt: false, // use true if you're on Azure
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };

  try {
    // Connect to your SQL Server database
    await sql.connect(config);

    // Fetch data from your SQL database using a specific query
    const result = await sql.query('SELECT id AS idProveidor, niea AS NIEA, descripcio AS Descripcio, nom AS Nom FROM Proveidors');
    const proveidorsData = result.recordset;

    // Delete existing data from Strapi's Proveidors collection
    await strapi.db.query('api::proveidor.proveidor').deleteMany();

    // Insert the fetched data into Strapi's Proveidors collection
    for (const data of proveidorsData) {
      await strapi.db.query('api::proveidor.proveidor').create({
        data: {
          idProveidor: data.idProveidor,
          NIEA: data.NIEA,
          Descripcio: data.Descripcio,
          Nom: data.Nom,
        },
      });
    }

    console.log('Strapi Proveidors collection populated successfully.');
  } catch (err) {
    console.error('Error populating Strapi Proveidors collection:', err);
  } finally {
    await sql.close();
  }
};
