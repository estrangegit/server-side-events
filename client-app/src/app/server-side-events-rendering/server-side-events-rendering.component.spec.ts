import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideEventsRenderingComponent } from './server-side-events-rendering.component';

describe('ServerSideEventsRenderingComponent', () => {
  let component: ServerSideEventsRenderingComponent;
  let fixture: ComponentFixture<ServerSideEventsRenderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSideEventsRenderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSideEventsRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
