import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { TopStoriesPage } from '../pages/top-stories/top-stories';
import { SportsPage } from '../pages/sports/sports';
import { SciencePage } from '../pages/science/science';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NewsDetailPage } from '../pages/news-detail/news-detail';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TopStoriesPage,
    SportsPage,
    SciencePage,
    EntertainmentPage,
    NewsDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TopStoriesPage,
    SportsPage,
    SciencePage,
    EntertainmentPage,
    NewsDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsServiceProvider
  ]
})
export class AppModule {}
