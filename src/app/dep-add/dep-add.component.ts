import { Component } from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms'
import { AcmeService } from '../services/acme.service';

@Component({
  selector: 'app-dep-add',
  templateUrl: './dep-add.component.html',
  styleUrls: ['./dep-add.component.css']
})
export class DepAddComponent {

  constructor(private service:AcmeService){

  }

  depForm = new FormGroup({
    "name": new FormControl("", [Validators.required]),
    "description": new FormControl("", [Validators.required])
  })

  get name(){
    return this.depForm.get("name")
  }

  get description(){
    return this.depForm.get("description")
  }

  createDep(){
    let data=this.depForm.value
    this.service.addDep(data).then((res:any)=>res.json()).then(data=>console.log("department created")
    ).catch(err=>alert(err)
    )
  }
}
