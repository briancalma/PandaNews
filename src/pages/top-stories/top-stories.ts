import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { NewsDetailPage } from '../news-detail/news-detail';
import { FilterOptionsPage } from '../filter-options/filter-options';

const category = "top-headlines";

@Component({
  selector: 'page-top-stories',
  templateUrl: 'top-stories.html',
})
export class TopStoriesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public newsProvider: NewsServiceProvider,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController
             ) { }



  ionViewDidLoad() {
    // this.newsProvider.getTopStories();
    this.newsProvider.getAllNews();
  }

  ionViewDidLeave() {
    
  }

  viewNews(news) {
    // this.navCtrl.push(NewsDetailPage,{ data: news });
    // this.browserCtrl.create(news.url);
  } 

  showOptionsModal() {
    let modal = this.modalCtrl.create(FilterOptionsPage); 
    
    modal.onDidDismiss( (data) => {
      console.log("FROM OPTIONS: ", data);
    });

    modal.present();
  }

  getNewStory(refresher) {
    setTimeout(() => {

      this.newsProvider.pullNewsItem(category)
          .subscribe( (data) => {

            let res = data["articles"][0];
            let isNewItem = this.newsProvider.newsList.topStories[0].title === res.title;
            // console.log(isNewItem + " " , data["articles"][0]);

              if( !isNewItem )  {
                this.newsProvider.newsList.topStories.unshift(res);
              } 
          })
      refresher.complete();
    }, 2000);
  }
}
