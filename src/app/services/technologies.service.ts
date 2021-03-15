import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {url} from '../url/url';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(private HtppClient: HttpClient) { }
  getAll(): Promise<string[]> {
    let result = this.HtppClient.get<string[]>(url+"technologies.json").toPromise();
    return result;
  }
}
