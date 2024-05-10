import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsImagesComponent } from './teams-images.component';

describe('TeamsImagesComponent', () => {
  let component: TeamsImagesComponent;
  let fixture: ComponentFixture<TeamsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
