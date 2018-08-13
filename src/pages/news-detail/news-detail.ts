import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})

export class NewsDetailPage {

  public news;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = navParams.get("data");
  }

  ionViewDidLoad() {
  }
  
}
