import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.items = 8;
    fixture.detectChanges();
  });

  it('PaginationComponent should be created', () => {
    expect(component).toBeTruthy();
  });

  it('PaginationComponent.change_page should work', () => {
    component.onchange.subscribe((value: number) => {
      expect(value).toEqual(2);
    });
    component.change_page(2);
  });

  it('PaginationComponent should have 2 pages', () => {
    expect(component.pages.length).toEqual(2);
  });

  it('PaginationComponent should have 3 pages', () => {
    component.items = 9;
    component.ngOnInit();
    expect(component.pages.length).toEqual(3);
  });
});
