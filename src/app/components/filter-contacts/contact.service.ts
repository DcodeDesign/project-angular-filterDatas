import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContact} from './IContact';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private static API_URL = 'http://jsonplaceholder.typicode.com/users';
  private static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  public handleHttpError(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case 404: {
        console.log('Error 404');
        break;
      }
      case 200: {
        console.log('succes 200');
        break;
      }
    }
    throw(error);
  }

  public getContacts(): Observable<IContact[]> {
    return (
      this.http.get<IContact[]>(ContactService.API_URL)
        .pipe(
          map(data => data,
            tap(() => {
                console.log('Test');
              },
            )
          )
        )
    );
  }
}
