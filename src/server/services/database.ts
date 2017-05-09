import {Config} from './../config/config';
import * as pg from 'pg';
import { pool } from "../server";

export function createPool() : pg.Pool{
    let poolConfig : pg.PoolConfig = {
        user: Config.database.user,
        password: Config.database.password,
        database: Config.database.database,
        host: Config.database.host,
        ssl: Config.database.ssl,
        port: Config.database.port
    }
    return new pg.Pool(poolConfig);
}

export function executeQuery(query: string, values: any[] = null): Promise<pg.QueryResult> {
    return pool.query(query, values);
}