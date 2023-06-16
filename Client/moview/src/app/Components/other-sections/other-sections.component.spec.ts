import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSectionsComponent } from './other-sections.component';

describe('OtherSectionsComponent', () => {
  let component: OtherSectionsComponent;
  let fixture: ComponentFixture<OtherSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherSectionsComponent]
    });
    fixture = TestBed.createComponent(OtherSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
