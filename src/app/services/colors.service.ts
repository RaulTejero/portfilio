import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../url/url'

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private Httpclient: HttpClient) {
  }
  getAllColors(): Promise<string[]> {
    let result = this.Httpclient.get<string[]>(url + "colors.json").toPromise();
    return result;
  }
}
