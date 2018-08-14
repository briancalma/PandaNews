import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { NewsDetailPage } from '../news-detail/news-detail';
 
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public newsProvider: NewsServiceProvider) {
  }

  ionViewDidLoad() {
    this.newsProvider.getScienceNews();  
  }

  viewNews(news) {
    this.navCtrl.push(NewsDetailPage,{ data: news });
  }
}
