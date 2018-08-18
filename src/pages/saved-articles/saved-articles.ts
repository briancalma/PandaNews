import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service';
import { NewsServiceProvider } from '../../providers/news-service/news-service';

@Component({
  selector: 'page-saved-articles',
  templateUrl: 'saved-articles.html',
})
export class SavedArticlesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dbCtrl: DatabaseServiceProvider,public newsProvider: NewsServiceProvider) {
  }

  ionViewDidLoad() {
    // this.dbCtrl.getAllData();
    this.dbCtrl.loadData();
    // console.log( this.dbCtrl.savedNews );
  }


}
