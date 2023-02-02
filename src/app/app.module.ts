import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DepAddComponent } from './dep-add/dep-add.component';
import { DepListComponent } from './dep-list/dep-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketComponent } from './ticket/ticket.component';
import { HometicketsComponent } from './hometickets/hometickets.component';
import { ManageticketComponent } from './manageticket/manageticket.component';
import { TicketbaseComponent } from './ticketbase/ticketbase.component';
import { ManageticketadminComponent } from './manageticketadmin/manageticketadmin.component';
import { HomeadminticketComponent } from './homeadminticket/homeadminticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DepAddComponent,
    DepListComponent,
    NavbarComponent,
    TicketComponent,
    HometicketsComponent,
    ManageticketComponent,
    TicketbaseComponent,
    ManageticketadminComponent,
    HomeadminticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
