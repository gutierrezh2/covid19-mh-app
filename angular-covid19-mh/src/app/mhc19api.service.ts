import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// PURPOSE: to provide CRUD methods to pull into mhcovid19 web api

@Injectable({
  providedIn: 'root'
})
export class MHC19ApiService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:5001/api/QuestionItems';

  constructor (private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
      // Get all jogging data
      return this.http.get(this.accessPointUrl, {headers: this.headers});
  }
  
  public add(payload) {
      return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }
  
  public remove(payload) {
      return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }
  
  public update(payload) {
      return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
  }

  // Add getQuestion method here
  /*getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/
}
