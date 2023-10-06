import { connectionMysql } from "../mysql.database";
import util from "util";

// comment this line if you want to use the connection pool
//export const db = util.promisify(connectionMysql.query).bind(connectionMysql);

export const db = "";
