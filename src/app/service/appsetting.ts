import { HttpHeaders } from '@angular/common/http';

export class AppSetting {
  public static API_ENDPOINT = 'https://opendata.resas-portal.go.jp';
  public static httpOptions = {
    headers: new HttpHeaders({
      'X-API-KEY': 't3JcWaKOOpj8ZsEhoNUkBuMVVWzASh9u0FdEKFPF',
    }),
  };
}
