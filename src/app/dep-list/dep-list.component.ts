import { Component, OnInit } from '@angular/core';
import { AcmeService } from '../services/acme.service';

// OnInit is an interface so implements if class extends

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.css']
})
export class DepListComponent implements OnInit{
  allDep:any
  constructor(private service:AcmeService){}

  // while component initialization fetch data
  ngOnInit(): void {
    this.service.listDep().then((res:any)=>res.json()).then(data=>this.allDep=data
    ).catch(err=>alert(err))
  }

  deleteDep(id:number){
    this.service.removeDep(id).then((res:any)=>res.json()).then(data=>console.log("deleted")
    )
  }

}
