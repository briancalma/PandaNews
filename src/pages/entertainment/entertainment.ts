import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { NewsDetailPage } from '../news-detail/news-detail';

const category = "entertainment"; 

@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
})
export class EntertainmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public newsProvider: NewsServiceProvider) {
  }

  ionViewDidLoad() {
    // this.newsProvider.getEntertainmentNews();
  }
  
  viewNews(news) {
    this.navCtrl.push(NewsDetailPage,{ data: news });
  }

  getNewStory(refresher) {
    setTimeout(() => {

      this.newsProvider.pullNewsItem(category)
          .subscribe( (data) => {

            let res = data["articles"][0];
            let isNewItem = this.newsProvider.newsList.entertainment[0].title === res.title;
            // console.log(isNewItem + " " , data["articles"][0]);

              if( !isNewItem )  {
                this.newsProvider.newsList.entertainment.unshift(res);
              } 
          })
      refresher.complete();
    }, 2000);
  }
}
