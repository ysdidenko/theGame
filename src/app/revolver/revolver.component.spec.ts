import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevolverComponent } from './revolver.component';

describe('RevolverComponent', () => {
  let component: RevolverComponent;
  let fixture: ComponentFixture<RevolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevolverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
