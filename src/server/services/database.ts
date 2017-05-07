import {Config} from './../config/config';
import * as pg from 'pg';
import { pool } from "../server";

const poolConfig : pg.PoolConfig = {
    user: Config.database.user,
    password: Config.database.password,
    database: Config.database.database,
    host: Config.database.host,
    ssl: Config.database.ssl,
    port: Config.database.port
}

export function createPool() : pg.Pool{
    console.log('creating pool', poolConfig);
    return new pg.Pool(poolConfig);
}

export function executeQuery(query: string, values: any[] = null): Promise<pg.QueryResult> {
    return pool.query(query, values);
}