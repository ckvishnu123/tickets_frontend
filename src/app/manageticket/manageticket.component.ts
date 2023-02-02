import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-manageticket',
  templateUrl: './manageticket.component.html',
  styleUrls: ['./manageticket.component.css']
})
export class ManageticketComponent implements OnInit{
  myTickets:any
  constructor(private service:TicketService){}

  // while component initialization fetch data
  ngOnInit(): void {
    this.service.listMyTicket().then((res:any)=>res.json()).then(data=>this.myTickets=data
    ).catch(err=>alert(err))
  }

}



