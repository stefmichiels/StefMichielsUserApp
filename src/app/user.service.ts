
import { Injectable } from '@angular/core';
import{User} from './user';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:8087/Controller';


  constructor(private http: HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl,{params: new HttpParams().set('action','GetUsersA')});
  }



  
  setFirstName(user: User): void {
    var body = new HttpParams().append('firstName', user.firstname).append('userId', user.id);
    const header = new HttpHeaders().set('Content-Type', "application/x-www-form-urlencoded");

    this.http.post<any>(this.usersUrl + '?action=UpdateFirstName&firstName=' + user.firstname + "&userId=" + user.id, body, {headers: header}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  setLastName(user: User): void {
    var body = new HttpParams().append('lastName', user.firstname).append('userId', user.id);
    const header = new HttpHeaders().set('Content-Type', "application/x-www-form-urlencoded");

    this.http.post<any>(this.usersUrl + '?action=UpdateLastName&lastName=' + user.lastname + "&userId=" + user.id, body, {headers: header}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}