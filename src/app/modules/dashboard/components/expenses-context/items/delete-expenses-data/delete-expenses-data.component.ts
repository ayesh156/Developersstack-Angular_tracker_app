import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExpensesService } from '../../Expenses.service';

@Component({
  selector: 'app-delete-expenses-data',
  templateUrl: './delete-expenses-data.component.html',
  styleUrl: './delete-expenses-data.component.scss'
})
export class DeleteExpensesDataComponent implements OnInit {

  expenses:Array<any> = [];

  constructor(private service:ExpensesService){

  }
  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.service.loadAll().subscribe(response=>{
      this.expenses = response;
    },error=>{
      console.log(error);
    })
  }

  // firestore collection
  delete(id: string) {
    if (confirm('Are you sure you want to delete this expense?')) {
      this.service.delete(id).then(() => {
        // Optionally fetch updated expenses or handle UI changes
        this.loadAll(); // Replace with actual method to reload expenses
      }).catch(error => {
        console.error('Error deleting expense:', error);
        // Optionally display an error message to the user
        alert('Failed to delete expense. Please try again.');
      });
    }
  }

}
