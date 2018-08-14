import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';


@Component({
  selector: 'page-filter-options',
  templateUrl: 'filter-options.html',
})
export class FilterOptionsPage { 

  public options = {
    country: ""
  }; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private newsCtrl: NewsServiceProvider) {
  }

  ionViewDidLoad() {
    
  }

  dismissModal() {
    this.newsCtrl.country = this.options.country;  
    this.viewCtrl.dismiss({data: this.options});
  }
}
