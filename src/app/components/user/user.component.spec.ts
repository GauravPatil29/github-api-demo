import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService, Status } from 'src/app/providers/data.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserComponent],
            imports: [
                HttpClientModule
            ],
            providers: [
                DataService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        component.user = {
            "login": "GauravPatil29",
            "id": 35704153,
            "node_id": "MDQ6VXNlcjM1NzA0MTUz",
            "avatar_url": "https://avatars.githubusercontent.com/u/35704153?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/GauravPatil29",
            "html_url": "https://github.com/GauravPatil29",
            "followers_url": "https://api.github.com/users/GauravPatil29/followers",
            "following_url": "https://api.github.com/users/GauravPatil29/following{/other_user}",
            "gists_url": "https://api.github.com/users/GauravPatil29/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/GauravPatil29/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/GauravPatil29/subscriptions",
            "organizations_url": "https://api.github.com/users/GauravPatil29/orgs",
            "repos_url": "https://api.github.com/users/GauravPatil29/repos",
            "events_url": "https://api.github.com/users/GauravPatil29/events{/privacy}",
            "received_events_url": "https://api.github.com/users/GauravPatil29/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        };

        fixture.detectChanges();
    });

    it('UserComponent should be created', () => {
        expect(component).toBeTruthy();
    });

    it('UserComponent.fetch_repos should return results', async () => {
        await component.fetch_repos();
        expect(component.status).toEqual(Status.HASDATA);
    });

    it('UserComponent.fetch_repos should return empty results', async () => {
        component.user.login = "gauravpatil2994";
        await component.fetch_repos();
        expect(component.status).toEqual(Status.NO_RESULTS);
    });

    it('UserComponent.fetch_repos should return errors', async () => {
        component.user.login = "";
        await component.fetch_repos();
        expect(component.status).toEqual(Status.ERROR);
    });
});
