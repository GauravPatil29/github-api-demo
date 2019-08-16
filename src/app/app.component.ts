import { Component } from '@angular/core';
import { User } from './results';
import { DataService, Status } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  status: Status = Status.NO_INPUT;
  error: string;
  results: Array<User>;
  sort_by: string = "az";
  
  pageSize: number = 4;
  page: number = 1;

  constructor(private _dataService: DataService) {
  }

  async get_users(event: any) {
    if (this.status == Status.LOADING) return;

    if (event.target.value == null || event.target.value.length <= 0) {
      this.status = Status.NO_INPUT;
      return;
    }

    try {
      this.status = Status.LOADING;
      this.results = await this._dataService.get_users(event.target.value);
      if (this.results.length <= 0) {
        this.status = Status.NO_RESULTS;
      } else {
        this.sort_users();
        this.status = Status.HASDATA;
      }
    } catch (error) {
      this.status = Status.ERROR;
      this.error = typeof (error) == "string" ? error : JSON.stringify(error);
    }
  }

  public sort_users(): void {
    if (this.results == null || this.results.length <= 0) return;
    this.results = this.results.sort((a: User, b: User) => {
      let diff = 0;
      switch (this.sort_by) {
        case "az":
          diff = a.login.localeCompare(b.login);
          break;
        case "za":
          diff = b.login.localeCompare(a.login);
          break;
        case "rankasc":
          diff = a.score - b.score;
          break;
        case "rankdsc":
          diff = b.score - a.score;
          break;
      }
      return diff;
    });
  }

}