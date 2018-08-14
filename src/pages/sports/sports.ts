import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { NewsDetailPage } from '../news-detail/news-detail';

@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public newsProvider: NewsServiceProvider) {
  }

  ionViewDidLoad() {
    this.newsProvider.getSportsNews();
  }

  viewNews(news) {
    this.navCtrl.push(NewsDetailPage,{ data: news });
  }
}
