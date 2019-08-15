import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results, User } from './results';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _baseUrl: string = "https://api.github.com";

  constructor(
    private _http: HttpClient
  ) { }

  public get_users(_input: string): Promise<Array<User>> {
    return new Promise<Array<User>>((_resolve, _reject) => {
      this._http.get(this._baseUrl + "/search/users?q=" + _input, {
        responseType: "json"
      }).subscribe((results: Results) => {
        _resolve(results.items);
      }, (errors) => {
        _reject(errors);
      });
    });
  }
}
