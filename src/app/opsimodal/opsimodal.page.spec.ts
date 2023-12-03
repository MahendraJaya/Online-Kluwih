import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpsimodalPage } from './opsimodal.page';

describe('OpsimodalPage', () => {
  let component: OpsimodalPage;
  let fixture: ComponentFixture<OpsimodalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpsimodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
