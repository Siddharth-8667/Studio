import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddProjectsComponent } from './admin-add-projects.component';

describe('AdminAddProjectsComponent', () => {
  let component: AdminAddProjectsComponent;
  let fixture: ComponentFixture<AdminAddProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
