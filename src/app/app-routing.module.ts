import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeadminticketComponent } from './homeadminticket/homeadminticket.component';
import { HometicketsComponent } from './hometickets/hometickets.component';
import { LoginComponent } from './login/login.component';
import { TicketbaseComponent } from './ticketbase/ticketbase.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"index", component:HomeComponent},
  {path:"ticket", component:HometicketsComponent},
  {path:"ticket/manage", component:TicketbaseComponent},
  {path:"ticket/manage/admin", component:HomeadminticketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
