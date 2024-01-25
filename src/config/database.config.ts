import dotenv from 'dotenv'

dotenv.config();
const database = {
    development:   {
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "",
      database: "invoiceapp",
      entities: [
        "dist/**/*.entity.js"
      ],
      synchronize: false,
      uuidExtension: 'pgcrypto'
    },
    test:  {
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: "",
      database: process.env.POSTGRES_DB,
      entities: [
        "src/**/*.entity.ts"
      ],
      synchronize: true,
      dropSchema: true,
      migrationsRun: false,
      migrations: [
        "src/database/migrations/*.ts"
      ],
      cli: {
        migrationsDir: "src/database/migrations"
    },
    keepConnectionAlive: true,
    uuidExtension: 'pgcrypto'
    }
  }

  const DatabaseConfig = () => ({
    ...database[process.env.NODE_ENV]
  })
// 
  export = DatabaseConfig;
