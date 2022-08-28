import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSetting } from './appsetting';

@Injectable({
  providedIn: 'root',
})
export class ResasService {
  constructor(private http: HttpClient) {}
  getPrefectures(): Observable<any> {
    return this.http.get(
      AppSetting.API_ENDPOINT + '/api/v1/prefectures',
      AppSetting.httpOptions
    );
  }
  getPopulation(prefCode: number): Observable<any> {
    return this.http.get(
      AppSetting.API_ENDPOINT +
        '/api/v1/population/composition/perYear?prefCode=' +
        prefCode,
      AppSetting.httpOptions
    );
  }
}
