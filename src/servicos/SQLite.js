import { SQLite } from "expo-sqlite";

function abreConexão() {
  const database = SQLite.OpenDatabase("db.db");
  return database;
}

export const db = abreConexao();
