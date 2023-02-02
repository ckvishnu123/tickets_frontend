import { Component } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms'
import { TicketService } from '../services/ticket.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  constructor(private service:TicketService){

  }

  ticketForm = new FormGroup({
    "ticket_id": new FormControl("", [Validators.required]),
    "subject": new FormControl("", [Validators.required])
  })

  get ticket_id(){
    return this.ticketForm.get("ticket_id")
  }

  get subject(){
    return this.ticketForm.get("subject")
  }

  createTicket(){
    let data=this.ticketForm.value
    this.service.addTicket(data).then((res:any)=>res.json()).then(data=>alert("ticket created")
    ).catch(err=>alert(err)
    )
  }

}
