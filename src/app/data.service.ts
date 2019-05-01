import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './auth/token-storage.service';
import { Observable } from 'rxjs';
import {SignUpInfo} from './auth/sigup-info';
import {event} from './event';
import {user} from './user';
import {HttpParameterCodec} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private Http: HttpClient, private token: TokenStorageService) { }
  getEvents() {
    return this.Http.get('http://localhost:8080/api/events');
  }
  getMyEvents() {
    return this.Http.get('http://localhost:8080/api/eventsCreated');
  }
  getEvent(id) {
    return this.Http.get('http://localhost:8080/api/event/' + id);
  }
  getCovsbyevent(id) {
    return this.Http.get('http://localhost:8080/api/covoiturageRelated/' + id);
  }
  getEventsByMusic(key) {
    return this.Http.get('http://localhost:8080/api/searchByMusic/' + key);
  }
  getEventsByName(key) {
    return this.Http.get('http://localhost:8080/api/searchByName/' + key);
  }
  getMyEventsByMusic(key) {
    return this.Http.get('http://localhost:8080/api/eventsCreatedByMusic/' + key);
  }
  getMyEventsByName(key) {
    return this.Http.get('http://localhost:8080/api/eventsCreatedByName/' + key);
  }
  getReqsByMusic(key) {
    return this.Http.get('http://localhost:8080/api/searchRequestByMusic/' + key);
  }
  getReqsByName(key) {
    return this.Http.get('http://localhost:8080/api/searchRequestByName/' + key);
  }
  getUser() {
    return this.Http.get('http://localhost:8080/api/currentUser');
  }
  getaUser(usr) {
    return this.Http.get('http://localhost:8080/api/user/'+usr);
  }
  editprofile(obj: user): Observable<string> {
    return this.Http.put<string>('http://localhost:8080/api/updateUser', obj, this.httpOptions);
  }
  addEvent(obj: event): Observable<string> {
      return this.Http.post<string>('http://localhost:8080/api/requests', obj, this.httpOptions);
     }
  addCov(obj,id): Observable<string> {
   const head = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'eventid': id})
    };    return this.Http.post<string>('http://localhost:8080/api/covoiturages', obj, head);
  }
  deletevent(id) {
    return this.Http.delete('http://localhost:8080/api/deleteEvent/' + id);
  }
  deletereq(id) {
    return this.Http.delete('http://localhost:8080/api/deleteRequest/' + id);
  }

  getUsers() {
    return this.Http.get('http://localhost:8080/api/users');

  }

  deleteuser(usr): any {
    return this.Http.delete('http://localhost:8080/api/deleteUser/' + usr);
  }


  getReqs() {
    return this.Http.get('http://localhost:8080/api/requests');
  }

  acceptreq(id) {
    return this.Http.get('http://localhost:8080/api/requestMerge/' + id);
  }

  getUsersByUsr(usr) {
    return this.Http.get('http://localhost:8080/api/searchByUsername/' + usr);
  }

  getMails() {
    return this.Http.get('http://localhost:8080/api/mails');
  }

  addImage(fd) {
    return this.Http.post('http://localhost/Back/addFile.php', fd, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }
}
