import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Car01rep05 } from './car01rep05.page';

describe('Car01rep05Page', () => {
  let component: Car01rep05;
  let fixture: ComponentFixture<Car01rep05>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Car01rep05 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Car01rep05);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
