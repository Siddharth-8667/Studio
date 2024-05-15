import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplitedProjectsComponent } from './user-complited-projects.component';

describe('UserComplitedProjectsComponent', () => {
  let component: UserComplitedProjectsComponent;
  let fixture: ComponentFixture<UserComplitedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComplitedProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComplitedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
