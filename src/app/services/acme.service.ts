import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcmeService {

  constructor() { }

  getToken(data:any){
    let options={
      "method": "post",
      "body":JSON.stringify(data),
      "headers":{
        "content-type":"application/json"
      }
    }
    return fetch("http://127.0.0.1:8000/token/", options)
  }

  addDep(data:any){
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
        return fetch("http://127.0.0.1:8000/department/", options)
      }
    else{
      return new Promise((res, rej)=>rej("failed to fetch data from resource"))
    }
  }

  listDep(){
    let token = localStorage.getItem("token")
    if(token){
        let options={
          "method": "get",
          "headers":{
            "content-type":"application/json",
            "Authorization": token
          }
        }
        return fetch("http://127.0.0.1:8000/department/", options)
      }
    else{
      return new Promise((res, rej)=>rej("failed to fetch data from resource"))
    }
  }

  removeDep(id:number){
    let token = localStorage.getItem("token")
    if(token){
        let options={
          "method": "delete",
          "headers":{
            "content-type":"application/json",
            "Authorization": token
          }
        }
        return fetch(`http://127.0.0.1:8000/department/${id}`, options)
      }
    else{
      return new Promise((res, rej)=>rej("failed to fetch data from resource"))
    }

  }


}
