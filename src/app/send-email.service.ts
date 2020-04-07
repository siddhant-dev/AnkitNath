import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Contact } from './contact/contact';
import { first } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  baseURL = environment.url;

  constructor(public http: HttpClient) { }

  send(data: Contact) {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseURL, data, {headers: header}).pipe(first());
  }
}
