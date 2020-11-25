import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatchingPage } from './watching.page';

describe('WatchingPage', () => {
  let component: WatchingPage;
  let fixture: ComponentFixture<WatchingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatchingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
