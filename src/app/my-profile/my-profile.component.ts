import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {event} from '../event';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  formon=false;
  pub=true;
  events;
  model=new event();
  filtre='music';
  key;
  fileList: FileList;
  constructor(private data:DataService,private Http:HttpClient) { }

  ngOnInit() {
    this.data.getMyEvents().subscribe(res => {
      this.events = res;
      console.log(this.events);
    });
  }
  setvalue(h){this.filtre=h;}
  setkey(h){this.key=h;}
  search(){
    if(this.filtre=='music'){
      this.data.getMyEventsByMusic(this.key).subscribe(res => {
        this.events = res;
        console.log(this.events);
      });}
    else {this.data.getMyEventsByName(this.key).subscribe(res => {
      this.events = res;
      console.log(this.events);
    });}
  }
  ajouterEvt(){
    this.fileupload();
    this.data.addEvent(this.model).subscribe(()=> location.reload(),error => console.log(error));
  }
  formonoff(){
    this.formon = true;
  }
  formoffon(){
    this.formon = false;
  }
  fileChange(event) {
    this.fileList = event.target.files;
    this.model.imageUrl=this.fileList[0].name;
  }
  fileupload(){

    let file: File = this.fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //  let options = new RequestOptions({ headers: headers });
    const options = {
      params: new HttpParams(),
      headers:  headers
    };
    this.Http.post(`http://localhost:8080/api/files`, formData, options)

      .subscribe(
        data => console.log('success'),
        error => console.log(error)
      );
  }

}
