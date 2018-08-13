import { Component } from '@angular/core';
import { TopStoriesPage } from '../top-stories/top-stories';
import { SciencePage } from '../science/science';
import { SportsPage } from '../sports/sports';
import { EntertainmentPage } from '../entertainment/entertainment';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TopStoriesPage;
  tab2Root = EntertainmentPage;
  tab3Root = SportsPage;
  tab4Root = SciencePage;

  constructor() { }
}
