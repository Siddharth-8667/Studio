import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateProjectsComponent } from './admin-update-projects.component';

describe('AdminUpdateProjectsComponent', () => {
  let component: AdminUpdateProjectsComponent;
  let fixture: ComponentFixture<AdminUpdateProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUpdateProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
