import { sql } from '@vercel/postgres';
import 'dotenv/config';

async function testPostgres() {
    try {
        // 現在時刻を取得するクエリ
        const result = await sql`SELECT NOW();`;
        console.log("Database response:", result);
    } catch (error) {
        console.error("Error connecting to Postgres:", error);
    }
}

testPostgres();
