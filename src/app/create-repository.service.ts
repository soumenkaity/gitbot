import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateRepositoryService {

  // f0a72273adc7d5654012f72ef139f53995bc77a6 

  private _url: string = 'https://api.github.com/user/repos?access_token=f0a72273adc7d5654012f72ef139f53995bc77a6';

  constructor(private http: HttpClient) {

  }

  createRepo(repoName: string, description: string) {
    return this.http.post(this._url, 
      {
        "name": repoName,
        "description": description,
        "homepage": "https://github.com",
        "private": false,
        "has_issues": true,
        "has_projects": true,
        "has_wiki": true
      }
    ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    errorMessage='repo name already exist';
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 
}