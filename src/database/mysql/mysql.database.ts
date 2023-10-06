import mysql2, { Pool } from "mysql2";
import { dbConfig } from "../../config/general/database.general";

export const connectionMysql: any = mysql2.createConnection(dbConfig);
