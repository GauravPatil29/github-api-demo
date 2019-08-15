import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status: Status = Status.NO_INPUT;
  error: String;
}

enum Status {
  NO_INPUT = 0,
  NO_RESULTS = 1,
  LOADING = 2,
  ERROR = 3,
  HASDATA = 4
}
