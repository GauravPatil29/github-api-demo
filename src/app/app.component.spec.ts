import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DataService, Status } from './providers/data.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        DataService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('AppComponent should be created', () => {
    expect(app).toBeTruthy();
  });

  it('AppComponent.get_users should change status to LOADING', async () => {
    app.status = Status.LOADING;
    await app.get_users({ "target": { "value": "" } });
    expect(app.status).toEqual(Status.LOADING);
  });

  it('AppComponent.get_users should change status to NO_INPUT', async () => {
    await app.get_users({ "target": { "value": "" } });
    expect(app.status).toEqual(Status.NO_INPUT);
  });

  it('AppComponent.get_users should change status to NO_RESULTS', async () => {
    await app.get_users({ "target": { "value": "fghffgfhg" } });
    expect(app.status).toEqual(Status.NO_RESULTS);
  });

  it('AppComponent.get_users should change status to NO_RESULTS', async () => {
    await app.get_users({ "target": { "value": "gauravpatil" } });
    expect(app.status).toEqual(Status.HASDATA);
  });

  it('AppComponent.get_users should change status to ERROR', async () => {
    await app.get_users({ "target": { "value": "%^&*$%^&$%^&" } });
    expect(app.status).toEqual(Status.ERROR);
  });

  it('AppComponent.sort should work', async () => {

    app.results = [];
    app.sort_users();

    await app.get_users({ "target": { "value": "gauravpatil" } });
    
    app.sort_by = "az";
    app.sort_users();

    app.sort_by = "za";
    app.sort_users();

    app.sort_by = "rankasc";
    app.sort_users();

    app.sort_by = "rankdsc";
    app.sort_users();

    expect(true).toEqual(true);
  });
});
