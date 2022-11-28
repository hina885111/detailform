import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent {
  UserList:any[]=[];
  UserId:number=null;
// data:any;
  unitForm = new FormGroup({
    Id : new FormControl(0),
    name: new FormControl(''),
    checkbox:new FormControl(false)

  });
  
  

  
 
  ngOnInit():void{
    const localData = localStorage.getItem("UserDetails");
    if(localData!=null){
      this.UserList= JSON.parse(localData);
    }
    

  }
  onEdit(stud:any)
  {
    this.UserList = stud;
    this.getValues();

  }
  getValues(){
    const localData  = localStorage.getItem('UserDetails');
    if( localData != null)
    {
      this.UserList = JSON.parse(localData);
      debugger;
      this.unitForm.get("Id").patchValue(this.UserList.length+1)
      

    }else {
      
    }
    // this.data =this.UserList.push(this.unitForm.value);
    this.UserList.push(this.unitForm.value);

    console.log(this.unitForm.value);
    localStorage.setItem('UserDetails',JSON.stringify(this.UserList))
  }

}
