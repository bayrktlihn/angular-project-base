import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AccountingModule } from './accounting/accounting.module';
import { IncomeModule } from './income/income.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { MainComponent } from './layouts/main/main.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [AppComponent, DefaultComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    LoginModule,
    AccountingModule,
    IncomeModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
