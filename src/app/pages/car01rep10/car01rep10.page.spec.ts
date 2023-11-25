import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Car01rep10 } from './car01rep10.page';

describe('Car01rep02Page', () => {
  let component: Car01rep10;
  let fixture: ComponentFixture<Car01rep10>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Car01rep10 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Car01rep10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
