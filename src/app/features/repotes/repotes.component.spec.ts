import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotesComponent } from './repotes.component';

describe('RepotesComponent', () => {
  let component: RepotesComponent;
  let fixture: ComponentFixture<RepotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
