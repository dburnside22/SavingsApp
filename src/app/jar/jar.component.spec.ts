import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JarComponent } from './jar.component';

describe('JarComponent', () => {
  let component: JarComponent;
  let fixture: ComponentFixture<JarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
