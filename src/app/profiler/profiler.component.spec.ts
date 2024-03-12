import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerComponent } from './profiler.component';

describe('ProfilerComponent', () => {
  let component: ProfilerComponent;
  let fixture: ComponentFixture<ProfilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
