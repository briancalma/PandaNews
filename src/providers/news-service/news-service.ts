import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(public http: HttpClient) { 
  }

  getAllNews() {
    this.getTopStories();
    this.getEntertainmentNews();
    this.getSportsNews();
    this.getScienceNews();
  }

  getTopStories() {
    let targetUrl = url + "/top-headlines?country=" + this.country + "&apiKey=" + apiKey;
    this.http.get(targetUrl)
        .subscribe((data) => {
          // this.news = data["articles"];
          console.log("TOP STORIES:");
          console.log(data["articles"]);
          this.newsList.topStories = data["articles"];
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

}
