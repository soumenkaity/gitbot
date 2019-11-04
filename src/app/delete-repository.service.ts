import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteRepositoryService {
  //https://api.github.com/repos/soumenkaity/Hello-World?access_token=6a00711f1184348919df77a1e4c130decc45e3fc

  private _url: string = 'https://api.github.com/repos/soumenkaity/';
  private _url2: string ='?access_token=6a00711f1184348919df77a1e4c130decc45e3fc';

  constructor(private http: HttpClient) {

  }

  deleteRepo(repoName: string) {
    
    return this.http.delete(this._url+repoName+this._url2).pipe(
      retry(1),
      catchError(this.handleError)  
    );
    
  }
  handleError(error) {
    let errorMessage = '';
    errorMessage='repo name does not exist';
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
     
  }

