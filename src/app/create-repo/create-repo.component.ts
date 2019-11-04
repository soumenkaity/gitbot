import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {

  constructor(private _githubService: GithubService, private router: Router) { }

  private errorMsg = "";

  ngOnInit() {
  }

  onSubmit(repoForm: NgForm ){
    if(repoForm.valid == true){
        console.log(repoForm.value);
        this._githubService.postRepoRequest( JSON.stringify(repoForm.value)).
            subscribe( error => this.errorMsg = error );
        console.log("Error: "+this.errorMsg);
        alert("New repository \"" + repoForm.controls['name'].value + "\" created");
        this.router.navigate(['/repos']);
    }
    else{
        console.log('Form input not valid');
        console.log(repoForm.value);

        if(repoForm.controls['name'].value == '' ){
            console.log('Here');
            alert("Enter Repository Name");
        }
    }
  }

}


