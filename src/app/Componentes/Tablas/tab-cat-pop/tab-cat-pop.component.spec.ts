import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCatPopComponent } from './tab-cat-pop.component';

describe('TabCatPopComponent', () => {
  let component: TabCatPopComponent;
  let fixture: ComponentFixture<TabCatPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCatPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCatPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
