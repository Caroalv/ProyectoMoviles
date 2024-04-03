import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceUpdatePage } from './place-update.page';

describe('PlaceUpdatePage', () => {
  let component: PlaceUpdatePage;
  let fixture: ComponentFixture<PlaceUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaceUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
