import { Component, Input, OnInit } from '@angular/core';
import { Status, DataService } from '../../providers/data.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    this.fetch_repos();
  }

  @Input() user: User;

  status: Status = Status.LOADING;
  error: string;
  repos: Array<any> = [];

  constructor(
    private _dataService: DataService
  ) {
  }

  async fetch_repos() {
    try {
      this.status = Status.LOADING;
      this.repos = await this._dataService.fetch_repos(this.user.login);
      if (this.repos.length <= 0) {
        this.status = Status.NO_RESULTS;
      } else {
        this.status = Status.HASDATA;
      }
    } catch (error) {
      this.status = Status.ERROR;
      this.error = typeof (error) == "string" ? error : JSON.stringify(error);
    }
  }
}
