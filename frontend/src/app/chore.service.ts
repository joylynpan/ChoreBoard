import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chore } from './chore';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {

  private baseURL = "http://localhost:8080/api/v1/chores";
  constructor(private httpClient: HttpClient) { }

  getChoreList(): Observable<Chore[]> {
    return this.httpClient.get<Chore[]>(this.baseURL);
  }

  createChore(chore: Chore): Observable<Object> {
    return this.httpClient.post(this.baseURL, chore);
  }

  getChoreById(id: number): Observable<Chore> {
    return this.httpClient.get<Chore>(this.baseURL + '/' + id)

  }

  updateChore(id: number, chore: Chore): Observable<Object> {
    return this.httpClient.put(this.baseURL + '/' + id, chore);

  }

  deleteChore(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + '/' + id);
  }

  getFilteredChores(resident: string, dayDue: string, timeLimit: string): Observable<Map<string, Object>> {
    const queryParams: { [key: string]: string } = {}; 
    if (resident) {
      queryParams['resident'] = resident;
    }
    if (dayDue) {
      queryParams['dayDue'] = dayDue;
    }
    if (timeLimit) {
      queryParams['timeLimit'] = timeLimit;
    }

    return this.httpClient.get<Map<string, Object>>(this.baseURL + '/filter', { params: queryParams });
  }
}
