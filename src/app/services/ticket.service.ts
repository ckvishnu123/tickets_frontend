import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  addTicket(data:any){
    let token = localStorage.getItem("token")
    if(token){
        let options={
          "method": "post",
          "body":JSON.stringify(data),
          "headers":{
            "content-type":"application/json",
            "Authorization": token
          }
        }
        return fetch("http://127.0.0.1:8000/create/tickets/", options)
      }
    else{
      return new Promise((res, rej)=>rej("failed to fetch data from resource"))
    }
  }

  listMyTicket(){
    let token = localStorage.getItem("token")
    if(token){
        let options={
          "method": "get",
          "headers":{
            "content-type":"application/json",
            "Authorization": token
          }
        }
        return fetch("http://127.0.0.1:8000/create/tickets/", options)
      }
    else{
      return new Promise((res, rej)=>rej("failed to fetch data from resource"))
    }
  }

  listTicketbyAdmin(){
    let token = localStorage.getItem("token")
    if(token){
        let options={
          "method": "get",
          "headers":{
            "content-type":"application/json",
            "Authorization": token
          }
        }
        return fetch("http://127.0.0.1:8000/manage/tickets/", options)
      }
    else{
      return new Promise((res, rej)=>rej("failed to fetch data from resource"))
    }
  }

  removeTicketbyAdmin(id:number){
    let token = localStorage.getItem("token")
    if(token){
        let options={
          "method": "delete",
          "headers":{
            "content-type":"application/json",
            "Authorization": token
          }
        }
        return fetch(`http://127.0.0.1:8000/manage/tickets/${id}`, options)
      }
    else{
      return new Promise((res, rej)=>rej("failed to fetch data from resource"))
    }

  }
}
