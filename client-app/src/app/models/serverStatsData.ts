export class ServerStatsData {
  $hostname: string;
  $type: string;
  $platform: string;
  $arch: string;
  $release: string;
  $uptime: number;
  $loadaverage: number[];
  $totalmem: number;
  $freemem: number;

  public constructor(hosname: string = null,
                     type: string = null,
                     platform: string = null,
                     arch: string = null,
                     release: string = null,
                     uptime: number = null,
                     loadaverage: number[] = null,
                     totalmem: number = null,
                     freemem: number = null) {
    this.$hostname = hosname;
    this.$type = type;
    this.$platform = platform;
    this.$arch = arch;
    this.$release = release;
    this.$uptime = uptime;
    this.$loadaverage = loadaverage;
    this.$totalmem = totalmem;
    this.$freemem = freemem;
  }

  get hostname(): string {
    return this.$hostname;
  }

  set hostname(hostname: string) {
    this.$hostname = hostname;
  }

  get type(): string {
    return this.$type;
  }

  set type(type: string) {
    this.$type = type;
  }

  get platform(): string {
    return this.$platform;
  }

  set platform(platform: string) {
    this.$platform = platform;
  }

  get arch(): string {
    return this.$arch;
  }

  set arch(arch: string) {
    this.$arch = arch;
  }

  get release(): string {
    return this.$release;
  }

  set release(release: string) {
    this.$release = release;
  }

  get uptime(): number {
    return this.$uptime;
  }

  set uptime(uptime: number) {
    this.$uptime = uptime;
  }

  get loadaverage(): number[] {
    return this.$loadaverage;
  }

  set loadaverage(loadaverage: number[]) {
    this.$loadaverage = loadaverage;
  }

  get totalmem(): number {
    return this.$totalmem;
  }

  set totalmem(totalmem: number) {
    this.$totalmem = totalmem;
  }

  get freemem(): number {
    return this.$freemem;
  }

  set freemem(freemem: number) {
    this.$freemem = freemem;
  }
}
