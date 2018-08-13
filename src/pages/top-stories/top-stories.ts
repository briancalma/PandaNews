import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { NewsDetailPage } from '../news-detail/news-detail';

/**
 * Generated class for the TopStoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-top-stories',
  templateUrl: 'top-stories.html',
})
export class TopStoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsProvider: NewsServiceProvider) {
  }

  ionViewDidLoad() {
    this.newsProvider.getTopStoriesFromUrl();
  }

  viewNews(news) {
    this.navCtrl.push(NewsDetailPage,{ data: news });
  }
}
