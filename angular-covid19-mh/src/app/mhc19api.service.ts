import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// PURPOSE: to provide CRUD methods to pull into mhcovid19 web api

@Injectable({
  providedIn: 'root'
})
export class MHC19ApiService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:5001/api/QuestionItems'; // URL for Questions DB
  private suggestionsAccessPointUrl: string = 'https://localhost:5001/api/SuggestionSetItems/'; // URL for SuggestionSet DB

  constructor (private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'}); // Contains important settings required for passing data between web API and front-end
  }

  // PURPOSE: HTTP methods to interact with the seeded Questions in In-Memory DB
  public get() {
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

  // PURPOSE: HTTP methods to interact with the seeded SuggestionSet in In-Memory DB
  public getSuggestionSet() {
    return this.http.get(this.suggestionsAccessPointUrl, {headers: this.headers});
  }

  public addSuggestionSet(payload) {
    return this.http.post(this.suggestionsAccessPointUrl, payload, {headers: this.headers});
  }

  public removeSuggestionSet(payload) {
    return this.http.delete(this.suggestionsAccessPointUrl + '/' + payload.id, {headers: this.headers});
  }

    public updateSuggestionSet(payload) {
    return this.http.put(this.suggestionsAccessPointUrl + '/' + payload.id, payload, {headers: this.headers});
}

}
