import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekTodoComponent } from './week-todo.component';

describe('WeekTodoComponent', () => {
  let component: WeekTodoComponent;
  let fixture: ComponentFixture<WeekTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekTodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeekTodoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
