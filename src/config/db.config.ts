import {DataSource} from "typeorm";
import { DB_DATABASE, DB_PASSWORD, DB_USERNAME } from "../shared/constants";

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: Number(DB_PORT||'0'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [Proveedor],
});