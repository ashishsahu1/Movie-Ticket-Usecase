import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePanelComponent } from './movie-panel.component';

describe('MoviePanelComponent', () => {
  let component: MoviePanelComponent;
  let fixture: ComponentFixture<MoviePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePanelComponent]
    });
    fixture = TestBed.createComponent(MoviePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
