import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResidentialProjectsComponent } from './user-residential-projects.component';

describe('UserResidentialProjectsComponent', () => {
  let component: UserResidentialProjectsComponent;
  let fixture: ComponentFixture<UserResidentialProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserResidentialProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserResidentialProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
