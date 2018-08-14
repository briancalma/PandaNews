import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "https://newsapi.org/v2";
const country = "ph"; 
const apiKey = "09ae18c5a78c4ca98f4b4ef51ad74772";

@Injectable()
export class NewsServiceProvider {

  public news = [];

  constructor(public http: HttpClient) { }

  getTopStoriesFromUrl() {
    let targetUrl = url + "/top-headlines?country=" + country + "&apiKey=" + apiKey;
    this.http.get(targetUrl)
        .subscribe((data) => {
          // this.news = data["articles"];
          console.log("TOP STORIES:");
          console.log(data["articles"]);
          this.news = data["articles"];
        });
  }

  getEntertainmentNews() {
    let category = "entertainment";
    let targetUrl = url + "/top-headlines?country=" + country + "&category=" + category + "&apiKey=" + apiKey;
    
    this.http.get(targetUrl)
        .subscribe((data) => {
          // this.news = data["articles"];
          console.log("Entertainment:");
          console.log(data["articles"]);
          this.news = data["articles"];
        });
  }

  getSportsNews() {
    let category = "sports";
    let targetUrl = url + "/top-headlines?country=" + country + "&category=" + category + "&apiKey=" + apiKey;
    
    this.http.get(targetUrl)
        .subscribe((data) => {
          // this.news = data["articles"];
          console.log("Sports:");
          console.log(data["articles"]);
          this.news = data["articles"];
        });
  }

  getScienceNews() {
    let category = "science";
    let targetUrl = url + "/top-headlines?country=" + country + "&category=" + category + "&apiKey=" + apiKey;
    
    this.http.get(targetUrl)
        .subscribe((data) => {
          // this.news = data["articles"];
          console.log("Sceince:");
          console.log(data["articles"]);
          this.news = data["articles"];
        });
  }

}
