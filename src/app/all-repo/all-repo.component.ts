import { Component, OnInit } from '@angular/core';
import { AllRepositoryService } from '../all-repository.service';
import { Router } from '@angular/router';
import { MongoService } from '../mongo.service';

@Component({
  selector: 'app-all-repo',
  templateUrl: './all-repo.component.html',
  styleUrls: ['./all-repo.component.css']
})
export class AllRepoComponent implements OnInit {

  public repos=[];
  public repoFav=[];
  constructor(private _aService: AllRepositoryService, private _mongoService: MongoService, private router: Router) { }

  ngOnInit() {
    this._aService.getAllRepo()
        .subscribe((data: any) => {
          this.repos = data;
          console.log(this.repos)
        })
    this._mongoService.getRepo()
        .subscribe(data => {
          this.repoFav = data
          console.log(this.repoFav)
          
          for(let repo of data)
          {
            document.getElementById(repo.id).className = "btn btn-danger";
            document.getElementById(repo.name).className = "glyphicon glyphicon-remove";
          }
        })
       
  }

  getFav(id){
    return this._mongoService.getRepoById(id);
  }

  changeColor()
  {
    this._mongoService.getRepo()
    .subscribe(data => {
      this.repoFav = data
      console.log(this.repoFav)
      
      for(let repo of data)
      {
        document.getElementById(repo.id).className = "btn btn-danger";
        document.getElementById(repo.name).className = "glyphicon glyphicon-remove";
      }
    })
  }

  star(id,name,created_at)
  {
    if(document.getElementById(id).className == "btn btn-warning")
    {
      console.log(id+" "+name+" "+" "+created_at);
      console.log("inside");
      window.alert("Successfully added");
      this._mongoService.saveRepo(id,name,created_at)
          .subscribe(
            (val) => {
              console.log(val);
          });

      document.getElementById(id).className = "btn btn-danger";
      document.getElementById(name).className = "glyphicon glyphicon-remove";
    }
    else if(document.getElementById(id).className == "btn btn-danger"){

      window.alert("Successfully removed");
      /* method remove called*/ 
      this._mongoService.delRepo(id).subscribe( data=> {
      
      })

      document.getElementById(id).className = "btn btn-warning";
      document.getElementById(name).className = "glyphicon glyphicon-star";
    }
  }
}
