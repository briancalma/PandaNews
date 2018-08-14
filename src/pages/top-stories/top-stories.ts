import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { NewsDetailPage } from '../news-detail/news-detail';
import { FilterOptionsPage } from '../filter-options/filter-options';

@Component({
  selector: 'page-top-stories',
  templateUrl: 'top-stories.html',
})
export class TopStoriesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private newsProvider: NewsServiceProvider,
              private modalCtrl: ModalController
             ) { }

  ionViewDidLoad() {
    this.newsProvider.getTopStoriesFromUrl();
  }

  viewNews(news) {
    this.navCtrl.push(NewsDetailPage,{ data: news });
  } 

  showOptionsModal() {
    let modal = this.modalCtrl.create(FilterOptionsPage); 
    
    modal.onDidDismiss( (data) => {
      console.log("FROM OPTIONS: " + data);
    });

    modal.present();
  }
}
