import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExpensesDataComponent } from './delete-expenses-data.component';

describe('DeleteExpensesDataComponent', () => {
  let component: DeleteExpensesDataComponent;
  let fixture: ComponentFixture<DeleteExpensesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteExpensesDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteExpensesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
