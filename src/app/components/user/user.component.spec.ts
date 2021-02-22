import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/providers/data.service';

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
            "avatar_url": "https://avatars.githubusercontent.com/u/7189784?v=4",
            "events_url": "https://api.github.com/users/71/events",
            "followers_url": "https://api.github.com/users/71/followers",
            "following_url": "https://api.github.com/users/71/following",
            "gists_url": "https://api.github.com/users/71/gists{/gist_id}",
            "gravatar_id": "",
            "html_url": "https://github.com/71",
            "id": 7189784,
            "login": "71",
            "node_id": "MDQ6VXNlcjcxODk3ODQ=",
            "organizations_url": "https://api.github.com/users/71/orgs",
            "received_events_url": "https://api.github.com/users/71/received_events",
            "repos_url": "https://api.github.com/users/71/repos",
            "score": 1,
            "site_admin": false,
            "starred_url": "https://api.github.com/users/71/starred",
            "subscriptions_url": "https://api.github.com/users/71/subscriptions",
            "type": "User",
            "url": "https://api.github.com/users/71"
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
