import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {user} from '../user';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
formon=false;
model=new user();
user;
  fileList: FileList;

  constructor(private data:DataService,private Http:HttpClient) { }

  ngOnInit() {
    this.data.getUser().subscribe(res => {
      this.user = res;
      this.model=this.user;
      console.log(this.model);
      console.log(this.user);
    });
  }
  editprofile(){
    this.fileupload();
    console.log(this.model);
    this.data.editprofile(this.model).subscribe(res => {
      console.log(this.model);
      location.reload()
    });
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
