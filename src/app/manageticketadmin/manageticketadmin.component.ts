import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-manageticketadmin',
  templateUrl: './manageticketadmin.component.html',
  styleUrls: ['./manageticketadmin.component.css']
})
export class ManageticketadminComponent implements OnInit{

  myTicket:any
  constructor(private service:TicketService){}

  // while component initialization fetch data
  ngOnInit(): void {
    this.service.listTicketbyAdmin().then((res:any)=>res.json()).then(data=>this.myTicket=data
    ).catch(err=>alert(err))
  }

  deleteTicketbyAdmin(id:number){
    this.service.removeTicketbyAdmin(id).then((res:any)=>res.json()).then(data=>console.log("deleted")
    )
  }

}
