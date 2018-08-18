import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const dbConfig = {
                    name: 'news.db',
                    location: 'default'
                 };

const table = "news";

@Injectable()
export class DatabaseServiceProvider {  

  public savedNews = [];

  constructor(private storage: Storage) {
    storage.remove('news');
    // this.loadData();
  }

  loadData() {
    this.storage.keys()
      .then( data => {
  
        data.forEach((key) => {
          // item.push( this.storage.get(key) );
          this.storage.get(key)
            .then( data  => this.savedNews.push(data));
        });

        // this.savedNews = item;
      })  
      .catch(e  => console.log(e));
  }

  // getAllSavedData() {
  //   this.loadData();
  //   return this.savedNews;
  // }

  saveData(data) {
    let newKey = this.getUniqueId(); 

    data.key = newKey;

    this.storage.set(newKey, data)
      .then(() => { 
        console.log('Success in adding item : ', data);
        this.savedNews.push(data); 
      })
      .catch((e) => console.log('Cannot Add Item, Error: ',e));
  }

  getDataById(key) {
    this.storage.get(key) 
      .then( (data) => { return data; })
      .catch( e => console.error(e))
  }

  getUniqueId () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };


  

}
