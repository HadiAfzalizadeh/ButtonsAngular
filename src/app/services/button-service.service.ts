import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  serverUrl = 'https://localhost:7276/buttons/';

  constructor(public http: HttpClient) {}

  getAllButtons() {
    return this.http.get<string[]>(this.serverUrl.concat('Get'));
  }

  getButtonContent(content: string) {
    return this.http.post(
      this.serverUrl.concat('GetContent/').concat(content),
      {},
      {
        responseType: 'text',
      }
    );
  }
}
