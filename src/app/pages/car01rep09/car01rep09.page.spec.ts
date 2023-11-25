import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Car01rep09 } from './car01rep09.page';

describe('Car01rep09Page', () => {
  let component: Car01rep09;
  let fixture: ComponentFixture<Car01rep09>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Car01rep09 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Car01rep09);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
