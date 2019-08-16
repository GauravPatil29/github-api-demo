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
  error: String;
  results: Array<User>;
  expandedIndex: Number = -1;

  constructor(private _dataService: DataService) {
    this.get_users({ target: { value: "gaurav" } });
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
        this.status = Status.HASDATA;
      }
    } catch (error) {
      this.status = Status.ERROR;
      this.error = typeof (error) == "string" ? error : JSON.stringify(error);
    }
  }

  toggle(index: number): void {
    if (index == this.expandedIndex) {
      this.expandedIndex = -1;
    } else {
      this.expandedIndex = index;
    }
  }

}