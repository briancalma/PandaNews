import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { NewsDetailPage } from '../news-detail/news-detail';

const category = "sports";

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

  getNewStory(refresher) {
    setTimeout(() => {

      this.newsProvider.pullNewsItem(category)
          .subscribe( (data) => {

            let res = data["articles"][0];
            let isNewItem = this.newsProvider.newsList.sports[0].title === res.title;
            // console.log(isNewItem + " " , data["articles"][0]);

              if( !isNewItem )  {
                this.newsProvider.newsList.sports.unshift(res);
              } 
          })
      refresher.complete();
    }, 2000);
  }
}
