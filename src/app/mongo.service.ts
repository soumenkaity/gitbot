import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  private _url:string="http://localhost:8080/api/v1/repo";
  constructor(private http: HttpClient) { }

  getRepo() : Observable<any>
  {
    return this.http.get<any>(this._url);
  }

  getRepoById(id: Number){
    let sys = this.http.get(this._url+'/'+id);
    console.log(sys);
    return sys;
  }

  saveRepo(id : Number, name:string, created_at: string)
  {
    console.log("hello");
    console.log(id+" "+name+ " "+created_at);
    return this.http.post(this._url,
    {
      "id":id,
      "name":name,
      "created_at":created_at
    })
  }

  delRepo(id: Number)
  {
    console.log("delete called");
    return this.http.delete(this._url+'/'+id);
  }
}
