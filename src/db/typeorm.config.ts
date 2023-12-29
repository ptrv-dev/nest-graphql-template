import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['src/**/*.entity.{ts,js}'],
  migrations: ['src/db/migration/*.{ts,js}'],
  migrationsTableName: 'migrations_table',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
