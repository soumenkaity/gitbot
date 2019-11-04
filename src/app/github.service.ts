import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private _url: string = 'https://api.github.com/users/soumenkaity';
  private _url2: string = 'https://api.github.com/users/soumenkaity/repos';

  constructor(private http: HttpClient) { 

  }

  private headers = {
    "Authorization": 'Token 6a00711f1184348919df77a1e4c130decc45e3fc'
  }
  private userName = "soumenkaity";
  private httpOptions = {
      "method" : "GET",
      "headers" : this.headers
  }
  
  getPersonalInfo(){
    return this.http.get(this._url, this.httpOptions);
  }

  // used to post request to add new repository
  postRepoRequest(jsonString):Observable<any>{
    var url = "https://api.github.com/user/repos";
    console.log('in service: ' + jsonString);
    return this.http.post<any>(url, jsonString, this.httpOptions);
  }

  
}
