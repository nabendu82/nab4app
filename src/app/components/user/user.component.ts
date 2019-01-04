import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[]; 
  isEdit:boolean = false;
  posts:any;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.name = "Nabendu Biswas";
    this.age = 36;
    this.email = "nab@gmail.com";
    this.address = {
      street:"10 street",
      city:"Bengaluru",
      state:"KA"
    }
    this.hobbies = ['coding', 'reading', 'meditating', 'running'];

    this.dataService.getPosts().subscribe(data => {
      this.posts = data
      console.log(this.posts);
    }
  );
  }

  onclick() {
    this.name = "Coder";
    this.hobbies.push('Learning');
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  addHobby(nw:string) {
    this.hobbies.unshift(nw);
    return false;
  }

  deleteHobby(hobby:string) {
    const fndInd = this.hobbies.findIndex(item => item === hobby);
    this.hobbies.splice(fndInd, 1);
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}
