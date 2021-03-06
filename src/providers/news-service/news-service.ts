import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Observable } from 'rxjs';
import { DatabaseServiceProvider } from '../database-service/database-service';

 
const url = "https://newsapi.org/v2";
const apiKey = "09ae18c5a78c4ca98f4b4ef51ad74772";

@Injectable()
export class NewsServiceProvider {

  public news = [];

  public newsList = {
    topStories: [],
    entertainment: [],
    sports: [],
    science: [] 
  };

  public country = "ph"; 

  constructor(public http: HttpClient, public browserCtrl: InAppBrowser, private dbCtrl: DatabaseServiceProvider) { 
  }

  getAllNews() {
    this.getTopStories();
    this.getEntertainmentNews();
    this.getSportsNews();
    this.getScienceNews();
    // this.dbCtrl.getAllData();
  }
  
  getTopStories() {
    let targetUrl = url + "/top-headlines?country=" + this.country + "&apiKey=" + apiKey;
    this.http.get(targetUrl)
        .subscribe((data) => {
          // this.news = data["articles"];
          console.log("TOP STORIES:");
          console.log(data["articles"]);
          this.newsList.topStories = data["articles"];
          // this.newsList.topStories.splice(0,1);
        });
  }

  getEntertainmentNews() {
    let category = "entertainment";
    let targetUrl = url + "/top-headlines?country=" + this.country + "&category=" + category + "&apiKey=" + apiKey;
    
    this.http.get(targetUrl)
        .subscribe((data) => {
          // this.news = data["articles"];
          console.log("Entertainment:");
          console.log(data["articles"]);
          this.newsList.entertainment = data["articles"];
        });
  }

  getSportsNews() {
    let category = "sports";
    let targetUrl = url + "/top-headlines?country=" + this.country + "&category=" + category + "&apiKey=" + apiKey;
    
    this.http.get(targetUrl)
        .subscribe((data) => {
          // this.news = data["articles"];
          console.log("Sports:");
          console.log(data["articles"]);
          this.newsList.sports = data["articles"];
        });
  }

  getScienceNews() {
    let category = "science";
    let targetUrl = url + "/top-headlines?country=" + this.country + "&category=" + category + "&apiKey=" + apiKey;
    
    this.http.get(targetUrl)
        .subscribe((data) => {
          // this.news = data["articles"];
          console.log("Sceince:");
          console.log(data["articles"]);
          this.newsList.science = data["articles"];
        });
  }

  viewNews(item) {
    this.browserCtrl.create(item.url);
  }

  getNewNewsItem(): Observable<any> {

    let targetUrl = url + "/top-headlines?country=" + this.country + "&pageSize=1&apiKey=" + apiKey; 
    return this.http.get(targetUrl);
  }

  pullNewsItem(category,pageSize=1): Observable<any> {

    let targetUrl = "";

    if(category == "top-headlines")
      targetUrl = url + "/" + category +"?country=" + this.country + "&pageSize=" + pageSize + "&apiKey=" + apiKey; 
    else {
      targetUrl = url + "/top-headlines?country=" + this.country + "&category=" + category + "&pageSize="+ pageSize  +"&apiKey=" + apiKey;
    }

    return this.http.get(targetUrl);
  }

  ignoreHTMLAndReturnText(text) {

    let plainText = "";

    if(text !== null && text !== "")  
      plainText = text.replace(/<[^>]*>/g, '');

    return plainText;
  }

  saveArticle(item) {
    //this.dbCtrl.addData(item);
    this.dbCtrl.saveData(item);
  }
  
  

}
