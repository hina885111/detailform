import { Component,Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit{
  @Input() UserLArray:any ={};

  UserDetails:any={};
  ngOnInit():void{
    const localData = localStorage.getItem("UserDetails");
    if(localData!=null){
      this.UserDetails= JSON.parse(localData);
    }
    
}
onDelete(item:any)
{
  const localData = localStorage.getItem("UserDetails");
  if(localData!=null){
    const UserArray= JSON.parse(localData);
    for(let index=0;index<UserArray.length;index++)
    if(UserArray[index].Id==item.Id)
    {
      UserArray.splice(0,1);
    }
  }

  localStorage.setItem('UserDetails',JSON.stringify(this.UserDetails))

}

}