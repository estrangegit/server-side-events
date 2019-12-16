import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerStats } from '../models/serverStats';
import { ServerStatsData } from '../models/serverStatsData';

@Component({
  selector: 'app-server-side-events-rendering',
  templateUrl: './server-side-events-rendering.component.html',
  styleUrls: ['./server-side-events-rendering.component.scss']
})
export class ServerSideEventsRenderingComponent implements OnInit {

  stats: ServerStats = new ServerStats();
  evtSource: EventSource;

  constructor() {}

  ngOnInit() {
    this.stats.data = new ServerStatsData();
    this.evtSource = new EventSource('/stats');

    this.evtSource.addEventListener('stats', (ev: MessageEvent) => {
      this.stats = JSON.parse(ev.data) as ServerStats;
    });
  }
}
