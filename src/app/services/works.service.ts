import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {url} from '../url/url';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private HttpClient: HttpClient) { }
  getAll(): Promise<any> {
    let result = this.HttpClient.get<any>(url+"apps.json").toPromise();
    return result;
  }
}
