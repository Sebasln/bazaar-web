const cds = require('@sap/cds');
const { Client } = require('pg');
require('dotenv').config();

async function deploy() {
    console.log('🚀 Iniciando despliegue de base de datos en Supabase...');

    if (!process.env.DATABASE_URL) {
        console.error('❌ Error: No se ha encontrado DATABASE_URL en el archivo .env');
        process.exit(1);
    }

    try {
        // 1. Compilar el modelo a SQL
        console.log('📦 Compilando modelo CDS a SQL...');
        const mod = await cds.load('*');
        const sql = cds.compile(mod).to.sql({ dialect: 'postgres' });

        // 2. Conectar a Supabase
        console.log('🔌 Conectando a Supabase...');
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();

        // 3. Ejecutar el SQL
        console.log('🔨 Ejecutando SQL en la base de datos...');
        // El SQL viene como un array de sentencias
        for (const statement of sql) {
            await client.query(statement);
        }

        console.log('✅ Base de datos desplegada con éxito!');
        await client.end();
    } catch (err) {
        console.error('❌ Error durante el despliegue:', err.message);
        process.exit(1);
    }
}

deploy();
