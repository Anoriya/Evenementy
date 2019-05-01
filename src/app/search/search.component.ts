import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import { DataService} from '../data.service';
import { event} from '../event';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
formon=false;
events;
model=new event();
filtre='music';
key;
fileList: FileList;
constructor(private app: AppComponent, private data: DataService, private Http: HttpClient) { }

  ngOnInit() {
    this.data.getEvents().subscribe(res => {
      this.events = res;
      console.log(this.events);
    });
  }
  setvalue(h){this.filtre=h;}
  setkey(h){this.key=h;}
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
  search(){
    if(this.filtre=='music'){
      this.data.getEventsByMusic(this.key).subscribe(res => {
        this.events = res;
        console.log(res);
        console.log(this.key);
      });}
    else {this.data.getEventsByName(this.key).subscribe(res => {
      this.events = res;
      console.log(res);
    });}
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
