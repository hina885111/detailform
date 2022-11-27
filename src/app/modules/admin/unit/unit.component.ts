import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent {
  UserList:any[]=[];
// data:any;
  unitForm = new FormGroup({
    name: new FormControl(''),
    checkbox:new FormControl(false)

  });
  getValues(){
    // this.data =this.UserList.push(this.unitForm.value);
    this.UserList.push(this.unitForm.value);

    console.log(this.unitForm.value)
  }

}
