import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerStats } from '../models/serverStats';
import { ServerStatsData } from '../models/serverStatsData';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server-side-events-rendering',
  templateUrl: './server-side-events-rendering.component.html',
  styleUrls: ['./server-side-events-rendering.component.scss']
})
export class ServerSideEventsRenderingComponent implements OnInit, OnDestroy{

  stats: ServerStats = new ServerStats();
  subscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.stats.data = new ServerStatsData();

    const observable = Observable.create((observer: any) => {
      const evtSource = new EventSource('/stats');
      evtSource.addEventListener('stats', (event: MessageEvent) => observer.next(event.data));
      evtSource.addEventListener('error', (event: MessageEvent) => observer.error(event));
      return () => {
        evtSource.close();
      };
    });

    this.subscription = observable.subscribe({
      next: (data: any) => {
        this.stats = JSON.parse(data) as ServerStats;
      },
      error: (err: any) => console.error('something wrong occurred: ' + err)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
