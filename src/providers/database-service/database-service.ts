import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite,SQLiteDatabaseConfig,SQLiteObject } from '@ionic-native/sqlite';


const dbConfig = {
                    name: 'news.db',
                    location: 'default'
                 };

const table = "news";

@Injectable()
export class DatabaseServiceProvider {

  constructor(private sqlLite: SQLite) {
    this.getAllData();
  }


  openDatabase() {
      
    this.sqlLite.create(dbConfig)
        .then( (db : SQLiteObject) => {
          
          // Create Table if don't exist
          db.executeSql(`CREATE TABLE IF NOT EXISTS news(
                         rowid INTEGER PRIMARY KEY, 
                         title text, 
                         description text, 
                         source text, 
                         url, 
                         urlToImage text`)
            .then(res => console.log('News Table is Created'))
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
  }

  createTable() {
    
  }

  addData(data) {
    this.sqlLite.create(dbConfig)
        .then( (db : SQLiteObject) => {
          
          // Create Table if don't exist
          db.executeSql(`CREATE TABLE IF NOT EXISTS news(
                         rowid INTEGER PRIMARY KEY, 
                         title text, 
                         description text, 
                         source text, 
                         url, 
                         urlToImage text)`)
            .then(res => console.log('News Table is Created'))
            .catch(e => console.log(e));

          db.executeSql('INSERT INTO news VALUES(NULL,?,?,?,?,?)',[
            data.title,data.description,data.source,data.url,data.urlToImage])
            .then( res => console.log('DATA IS SAVED!'))
            .catch( e => console.error(e));
        })
        .catch(e => console.log(e));
  }

  getAllData() {
    this.sqlLite.create(dbConfig)
        .then( (db : SQLiteObject) => {
          
          // Create Table if don't exist
          db.executeSql(`CREATE TABLE IF NOT EXISTS news(
                         rowid INTEGER PRIMARY KEY, 
                         title text, 
                         description text, 
                         source text, 
                         url, 
                         urlToImage text)`)
            .then(res => console.log('News Table is Created'))
            .catch(e => console.log(e));

          db.executeSql('SELECT * FROM news ORDER BY rowid DESC')
            .then( res => {
              
              // console.log(res);
            })
            .catch( e => console.error(e));
        })
        .catch(e => console.log(e));
  }

}
