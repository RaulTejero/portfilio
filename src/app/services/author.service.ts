import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../url/url';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private Httpclient: HttpClient) {
  }

  getName(): Promise<string> {
    let result = this.Httpclient.get<string>(url + "author/name.json").toPromise();
    return result;
  }
  getRoll(): Promise<string> {
    let result = this.Httpclient.get<string>(url + "author/roll.json").toPromise();
    return result;
  }

 getContact(): Promise<any> {
   let result = this.Httpclient.get<any>(url+"author/contact.json").toPromise();
   return result; 
 }
 getSocial(): Promise<any> {
   let result = this.Httpclient.get<any>(url+"author/social.json").toPromise();
   return result; 
 }
 getPhoto(): Promise<any> {
   let result = this.Httpclient.get<any>(url+"author/photo.json").toPromise();
   return result; 
 }
 getCV(): Promise<any> {
   let result = this.Httpclient.get<any>(url+"author/cv.json").toPromise();
   return result; 
 }
}
