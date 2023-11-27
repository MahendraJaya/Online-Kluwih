import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailtokoPage } from './detailtoko.page';

describe('DetailtokoPage', () => {
  let component: DetailtokoPage;
  let fixture: ComponentFixture<DetailtokoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailtokoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
