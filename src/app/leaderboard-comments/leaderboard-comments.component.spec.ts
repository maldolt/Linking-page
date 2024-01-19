import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardCommentsComponent } from './leaderboard-comments.component';

describe('LeaderboardCommentsComponent', () => {
  let component: LeaderboardCommentsComponent;
  let fixture: ComponentFixture<LeaderboardCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardCommentsComponent]
    });
    fixture = TestBed.createComponent(LeaderboardCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
