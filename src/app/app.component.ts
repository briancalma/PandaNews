import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { FilterOptionsPage } from '../pages/filter-options/filter-options';
import { SavedArticlesPage } from '../pages/saved-articles/saved-articles';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  showOptionsModal() {
    let modal = this.modalCtrl.create(FilterOptionsPage);
    
    modal.onDidDismiss( (data) => {
      console.log("FROM OPTIONS: ", data);
    });

    modal.present();
  }

  openPage() {
    this.rootPage = SavedArticlesPage;
  }

  openHome() {
    this.rootPage = TabsPage;
  }

}
