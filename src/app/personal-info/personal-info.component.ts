import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  public myInfo;
  public repos=[];
  constructor(private _gService: GithubService) { }

ngOnInit() {
  this._gService.getPersonalInfo().
  subscribe((data: any) => {
    this.myInfo = data;
    console.log(this.myInfo)
})
   
  }
  showPersonalInfo(){
  //   this._gService.getPersonalInfo().
  //   subscribe((data: any) => {
  //     this.myInfo = data;
  //     console.log(this.myInfo)
  // })
  }
}
