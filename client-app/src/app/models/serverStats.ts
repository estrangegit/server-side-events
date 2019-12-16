import { ServerStatsData } from './serverStatsData';

export class ServerStats {
  $date: string;
  $data: ServerStatsData;

  public constructor(date: string = null,
                     serverStatsData: ServerStatsData = new ServerStatsData()) {
    this.$date = date;
    this.$data = serverStatsData;
  }

  get date(): string {
    return this.$date;
  }

  set date(date: string) {
    this.$date = date;
  }

  get data(): ServerStatsData {
    return this.$data;
  }

  set data(serverStatsData: ServerStatsData) {
    this.$data = serverStatsData;
  }
}
