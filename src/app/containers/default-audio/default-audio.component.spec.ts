import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAudioComponent } from './default-grid.component';

describe('DefaultGridComponent', () => {
  let component: DefaultAudioComponent;
  let fixture: ComponentFixture<DefaultAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultAudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
