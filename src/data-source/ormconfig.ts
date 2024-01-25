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
  entities: ['dist/**/*entity.js'],
  migrations: ['dist/migration/*migration.js'],
};

const dataSource = new DataSource(connectionSource);
    
export default dataSource;
