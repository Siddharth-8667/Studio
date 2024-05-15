import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteriorProjectsComponent } from './user-interior-projects.component';

describe('UserInteriorProjectsComponent', () => {
  let component: UserInteriorProjectsComponent;
  let fixture: ComponentFixture<UserInteriorProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInteriorProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInteriorProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
