import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboxLibraryComponent } from './abox-library.component';

describe('AboxLibraryComponent', () => {
  let component: AboxLibraryComponent;
  let fixture: ComponentFixture<AboxLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboxLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboxLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
