import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportComponent } from './components/report/report.component';
import { StockComponent } from './components/stock/stock.component';
import { StockCreateComponent } from './components/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock-edit/stock-edit.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'

import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    ReportComponent,
    StockComponent,
    StockCreateComponent,
    StockEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
