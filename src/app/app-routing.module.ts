import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AccountingModule } from './accounting/accounting.module';
import { IncomeModule } from './income/income.module';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => LoginModule,
  },
  {
    path: '',
    component: DefaultComponent,
    loadChildren: () => AccountingModule,
  },
  {
    path: '',
    component: DefaultComponent,
    loadChildren: () => IncomeModule,
  },
  {
    path: '',
    component: MainComponent,
    loadChildren: () => MainModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
