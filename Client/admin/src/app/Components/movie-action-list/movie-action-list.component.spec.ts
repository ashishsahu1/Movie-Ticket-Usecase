import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieActionListComponent } from './movie-action-list.component';

describe('MovieActionListComponent', () => {
  let component: MovieActionListComponent;
  let fixture: ComponentFixture<MovieActionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieActionListComponent]
    });
    fixture = TestBed.createComponent(MovieActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
