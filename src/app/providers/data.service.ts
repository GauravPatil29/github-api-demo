import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Results } from '../interfaces/results';
import { Repo } from '../interfaces/repo';

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

  public fetch_repos(_input: string): Promise<Array<Repo>> {
    return new Promise<Array<Repo>>((_resolve, _reject) => {
      this._http.get(this._baseUrl + "/users/" + _input + "/repos", {
        responseType: "json"
      }).subscribe((results: any) => {
        _resolve(results);
      }, (errors) => {
        _reject(errors);
      });
    });
  }
}

export enum Status {
  NO_INPUT = 0,
  NO_RESULTS = 1,
  LOADING = 2,
  ERROR = 3,
  HASDATA = 4
}
