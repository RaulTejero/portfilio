import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../url/url';
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private HttpClient: HttpClient) {

   }
  getP(): Promise<string[]> {
    let result = this.HttpClient.get<string[]>(url+"about.json").toPromise();
    return result;
  }
}
