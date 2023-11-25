import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Car01rep08 } from './car01rep08.page';

describe('Car01rep08Page', () => {
  let component: Car01rep08;
  let fixture: ComponentFixture<Car01rep08>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Car01rep08 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Car01rep08);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
