import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardContextComponent } from './components/dashboard-context/dashboard-context.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DefaultComponent } from './components/default/default.component';
import { LoanContextComponent } from './components/loan-context/loan-context.component';
import { ExpensesContextComponent } from './components/expenses-context/expenses-context.component';
import { SalaryContextComponent } from './components/salary-context/salary-context.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { NewExpensesDataComponent } from './components/expenses-context/items/new-expenses-data/new-expenses-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FindExpensesDataComponent } from './components/expenses-context/items/find-expenses-data/find-expenses-data.component';
import { UpdateExpensesDataComponent } from './components/expenses-context/items/update-expenses-data/update-expenses-data.component';
import { LoadAllExpensesDataComponent } from './components/expenses-context/items/load-all-expenses-data/load-all-expenses-data.component';
import { DeleteExpensesDataComponent } from './components/expenses-context/items/delete-expenses-data/delete-expenses-data.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContextComponent,
    DashboardHeaderComponent,
    DefaultComponent,
    LoanContextComponent,
    ExpensesContextComponent,
    SalaryContextComponent,
    NewExpensesDataComponent,
    FindExpensesDataComponent,
    UpdateExpensesDataComponent,
    LoadAllExpensesDataComponent,
    DeleteExpensesDataComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButton,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class DashboardModule { }
