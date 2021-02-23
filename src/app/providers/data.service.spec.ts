import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
  }));

  it('DataService should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('DataService.get_users should return user list', async () => {
    const service: DataService = TestBed.get(DataService);
    let users = await service.get_users("GauravPatil29");
    expect(users.length).toBeTruthy();
  });

  it('DataService.get_users should return error', async () => {
    const service: DataService = TestBed.get(DataService);
    let error;
    try {
      await service.get_users("#$%^#%%@(^");
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
  });

  it('DataService.fetch_repos should return repo list', async () => {
    const service: DataService = TestBed.get(DataService);
    let repos = await service.fetch_repos("GauravPatil29");
    expect(repos.length).toBeTruthy();
  });

  it('DataService.fetch_repos should return error', async () => {
    const service: DataService = TestBed.get(DataService);
    let error;
    try {
      await service.fetch_repos("#$%^#%%@(^");
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
  });
});
