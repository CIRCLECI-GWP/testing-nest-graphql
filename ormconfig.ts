// module.exports = {
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: '',
//     database: 'invoiceapp',
//     entities: ['dist/**/*.model.js'],
//     migrations: ['dist/src/database/migrations/*.js'],
//     cli: {
//       migrationsDir: 'src/database/migrations',
//     },
//   };

import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm";

export const connectionSource: DataSourceOptions = {
  migrationsTableName: 'migrations',
  type: "postgres",
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'invoiceapp',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
};

    
const dataSource = new DataSource(connectionSource);
    
export default dataSource;

