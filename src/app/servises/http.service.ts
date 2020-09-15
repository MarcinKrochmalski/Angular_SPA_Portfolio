import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private httpClient: HttpClient) { }

  sendEmail(data: FormData): Observable<any> {

    return this.httpClient
      .post<any>('/save', data)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      )

  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` +
      `Returned code: ${error.status} \n`
    );
    return throwError('Error, please try again later.');
  }

}

