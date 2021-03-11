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
}
