import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  actualites;
  publications;
  constructor(private Http: HttpClient) { }
  getData(url): any {
    return this.Http.get(url);
  }
  getActualites() {
    return this.Http.get('http://localhost/Back/actualite.php');
  }
  getActualitespage(i) {
    return this.Http.get('http://localhost/Back/actualitepage.php?i=' + i);
  }
  getActualitesnum() {
    return this.Http.get('http://localhost/Back/actualitenum.php');
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
  addMessage(obj) {

    let body = new URLSearchParams();
    body.set('lastName', obj.lastName);
    body.set('firstName', obj.firstName);
    body.set('phone', obj.phone);
    body.set('email', obj.email);
    body.set('subject', obj.subject);
    body.set('message', obj.message);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this.Http.post<string>('http://localhost/Back/get_responseContact.php', body.toString(), { headers, responseType: "text" as 'json' });
  }
  addNewsletter(obj) {
    let body = new URLSearchParams();
    body.set('email', obj.email);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this.Http.post<string>('http://localhost/Back/addNewsletter.php', body.toString(), { headers, responseType: "text" as 'json' });
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
