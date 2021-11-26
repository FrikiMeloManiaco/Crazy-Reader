import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLibModComponent } from './tab-lib-mod.component';

describe('TabLibModComponent', () => {
  let component: TabLibModComponent;
  let fixture: ComponentFixture<TabLibModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabLibModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLibModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
