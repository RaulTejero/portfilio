import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../url/url'

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private Httpclient: HttpClient) {
  }

  getAllNav(): Promise<string[]> {
    let result = this.Httpclient.get<string[]>(url + "router.json").toPromise();
    return result;
  }

}
