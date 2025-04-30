const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "switchyard.proxy.rlwy.net",
  user: "root",
  password: "gWBArYIcJUSUBTTvCvcnCFbcLLoSkVDP",
  database: "railway",
  port: 34444,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Función para probar la conexión
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Conexión exitosa a la base de datos");

    // Consulta de prueba
    const [rows] = await connection.query("SELECT 1");
    console.log("✅ Consulta de prueba exitosa:", rows);

    connection.release();
    return true;
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:");
    console.error(error); // muestra stack completo
    return false;
  }
}

// Ejecutar la prueba de conexión solo si este archivo se ejecuta directamente
if (require.main === module) {
  testConnection();
}

module.exports = pool;

