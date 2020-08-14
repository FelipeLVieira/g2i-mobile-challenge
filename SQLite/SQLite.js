import { useState } from 'react'
import * as SQLite from 'expo-sqlite';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const tableName = "socore_ranking";
const db = SQLite.openDatabase("socore_ranking_db");

const SQL = {
  initDatabase: () => {
    db.transaction(tx => {
      tx.executeSql(
        `create table if not exists ${tableName} (id integer primary key not null, score int, max_score int, name text);`
      );
    });
  },

  addHistory: (score, maxScore, name) => {
    db.transaction(
      tx => {
        tx.executeSql(`insert into ${tableName} (score, max_score, name) values (?,?,?)`, [
          score,
          maxScore,
          name
        ]);
      }
    );
  },

  deleteHistory: (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from ${tableName} where id = (?)`, [
          id
        ]);
      }
    );
  },

  getHistory: () => {
    return new Promise(async (resolve) => {
      const results = [];
      return db.transaction(async tx => {
        tx.executeSql(
          `select * from ${tableName} order by score DESC`,
          [],
          (trans, result) => {
            const { rows } = result;
            var len = rows._array.length;
            for (let i = 0; i < len; i++) {
              let row = rows._array[i];
              const { id, score, max_score, name } = row;
              results.push({
                id,
                score,
                max_score,
                name
              });
            }
            return resolve(results);
          })
      });
    });
  }  
}



export default SQL;
