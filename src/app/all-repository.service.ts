import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllRepositoryService {

  private headers = {
    "Authorization": 'Token 6a00711f1184348919df77a1e4c130decc45e3fc'
  }
  private userName = "soumenkaity";
  private httpOptions = {
      "method" : "GET",
      "headers" : this.headers
  }
  private _url: string = 'https://api.github.com/user/repos';
  private listRepo;

  constructor(private http: HttpClient, private router: Router) { }

  getAllRepo() {
    this.listRepo = this.http.get(this._url, this.httpOptions);
    return this.http.get(this._url, this.httpOptions);
  }
}
 