import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income.component';
import { IncomeRoutingModule } from './income-routing.module';

@NgModule({
  declarations: [IncomeComponent],
  imports: [CommonModule, IncomeRoutingModule],
})
export class IncomeModule {}
