import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./environments";
import { IConfiguration } from "../helpers/database.helper";

export const dbConfig: IConfiguration = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
};
