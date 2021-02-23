import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() items: number;
  @Input() active: number;
  @Input() pageSize: number;
  @Output() onchange = new EventEmitter<number>();

  pages: Array<number> = [];
  pages_count: number = 0;

  constructor() { }

  ngOnInit() {
    this.pages_count = parseInt((this.items / 4).toFixed(0)) + (this.items % 4 == 0 ? 0 : 1);
    this.pages = [];
    for (var index = 1; index <= this.pages_count; index++) {
      this.pages.push(index);
    }
  }

  change_page(page: number) {
    this.onchange.emit(page);
  }

}
