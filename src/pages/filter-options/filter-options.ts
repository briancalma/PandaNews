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

    this.options.country = newsCtrl.country;
  
  }


  ionViewDidLoad() {
    
  }

  dismissModal() {

    // checks if the selected country is the same to the current country.
    if(this.options.country !== this.newsCtrl.country) {
      this.newsCtrl.country = this.options.country
      this.newsCtrl.getAllNews();  
    }

    this.viewCtrl.dismiss({data: this.options});
  }
}
