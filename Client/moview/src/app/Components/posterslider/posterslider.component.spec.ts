import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostersliderComponent } from './posterslider.component';

describe('PostersliderComponent', () => {
  let component: PostersliderComponent;
  let fixture: ComponentFixture<PostersliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostersliderComponent]
    });
    fixture = TestBed.createComponent(PostersliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
