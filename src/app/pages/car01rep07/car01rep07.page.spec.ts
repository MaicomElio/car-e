import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Car01rep07 } from './car01rep07.page';

describe('Car01rep07Page', () => {
  let component: Car01rep07;
  let fixture: ComponentFixture<Car01rep07>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Car01rep07 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Car01rep07);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
