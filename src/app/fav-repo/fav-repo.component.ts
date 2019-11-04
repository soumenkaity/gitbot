import { Component, OnInit } from '@angular/core';
import { MongoService } from '../mongo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fav-repo',
  templateUrl: './fav-repo.component.html',
  styleUrls: ['./fav-repo.component.css']
})
export class FavRepoComponent implements OnInit {

  constructor(private _ser: MongoService, private router: Router) { }
  public repos=[];
  ngOnInit() {
    this._ser.getRepo()
        .subscribe(data => this.repos = data);
  }
  del(repo)
  {
    this._ser.delRepo(repo).subscribe( data=> {
      console.log(data);
      window.alert("successfully deleted");
    })
    /**get  latest data */
    // this.router.navigateByUrl('/fav-repo');
    document.getElementById(repo).style.display="none";

  }

}
