import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantLibrosComponent } from './pant-libros.component';

describe('PantLibrosComponent', () => {
  let component: PantLibrosComponent;
  let fixture: ComponentFixture<PantLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
