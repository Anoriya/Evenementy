import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './auth/token-storage.service';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  actualites;
  publications;
  constructor(private Http: HttpClient,private token: TokenStorageService) { }
  getData(url): any {
    return this.Http.get(url);
  }
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
  getActualite(id) {
    console.log(id);
    return this.Http.get('http://localhost/Back/get_actulite_by_id.php?id=' + id);
  }
  getPublications() {
    return this.Http.get('http://localhost/Back/publication.php');
  }
  getPublication(id) {
    console.log(id);
    return this.Http.get('http://localhost/Back/get_pub_by_id.php?id=' + id);
  }
  getPublicationsnum() {
    return this.Http.get('http://localhost/Back/publicationnum.php');
  }
  getPublicationspage(i) {
    return this.Http.get('http://localhost/Back/publicationpage.php?i=' + i);
  }
  addEvent(obj) {

    let body = new URLSearchParams();
    body.set('name', obj.name);
    body.set('music', obj.music);
    body.set('place', obj.place);
    body.set('startingTime', obj.startingTime);
    body.set('endingTime', obj.endingTime);
    body.set('description', obj.description);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this.Http.post<string>('http://localhost:8080/api/requests' , body.toString(), { headers, responseType: "text" as 'json' });
  }
  addCov(obj) {
    let body = new URLSearchParams();
    body.set('carsName', obj.carsName);
    body.set('price', obj.price);
    body.set('email', obj.meetingPlace);
    body.set('eventid', obj.event);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this.Http.post<string>('http://localhost:8080/api/covoiturages', body.toString(), { headers, responseType: "text" as 'json' });
  }
  getContact() {
    return this.Http.get('http://localhost/Back/contact.php');
  }

  isLogged(data: any) {
    return this.Http.post('http://localhost/Back/login.php', data);

  }


  getPhoto(url): any {
    return this.Http.get(url);
  }


  ajouterPublication(info) {
    return this.Http.post("http://localhost/Back/ajouterPublication.php", info);
  }


  modifierPublication(info) {
    return this.Http.post("http://localhost/Back/modifierPublication.php", info);
  }

  supprimerPublication(id) {
    return this.Http.post("http://localhost/Back/supprimerPublication.php/", { 'id': id })
  }


  ajouterActualite(info) {
    return this.Http.post("http://localhost/Back/ajouterActualite.php", info);
  }
  modifierActualite(info) {
    return this.Http.post("http://localhost/Back/modifierActualite.php", info);
  }
  supprimerActualite(id) {
    return this.Http.post("http://localhost/Back/supprimerActualite.php/", { 'id': id })
  }

  getInfoContact(id) {
    return this.Http.get('http://localhost/Back/infocontact.php?id=' + id);
  }
  modifierInfoContact(info) {
    return this.Http.post("http://localhost/Back/modifierInfoContact.php", info);
  }
  getMessages() {
    return this.Http.get('http://localhost/Back/messages.php');
  }
  getMails() {
    return this.Http.get('http://localhost/Back/mails.php');
  }
  getMessage(id) {
    return this.Http.get('http://localhost/Back/getmessage.php?id=' + id);
  }
  getMessagespage(id) {
    return this.Http.get('http://localhost/Back/messagespage.php?id=' + id);
  }
  getMessagessnum() {
    return this.Http.get('http://localhost/Back/messagesnum.php');
  }
  getMailspage(id) {
    return this.Http.get('http://localhost/Back/mailspage.php?id=' + id);
  }
  getMailsnum() {
    return this.Http.get('http://localhost/Back/mailsnum.php');
  }
  addImage(fd) {
    return this.Http.post('http://localhost/Back/addFile.php', fd, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }
}
