const Database = require('./config')

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT NOT NULL
        )`);
    
        await db.exec(`CREATE TABLE questions (
            id INTERGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`)

        await db.close()
    }
}

initDb.init();



