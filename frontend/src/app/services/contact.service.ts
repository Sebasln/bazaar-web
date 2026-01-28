import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  // Esta sería la URL de tu API del backend real
  private apiUrl = 'http://localhost:5005/odata/v4/catalog/ContactMessages';

  constructor(private http: HttpClient) { }

  // Función para enviar el formulario
  sendMessage(messageData: any): Observable<any> {
    console.log('Enviando mensaje a la API...', messageData);

    // Aquí es donde Angular hace la magia de conectarse con el Backend/API:
    // return this.http.post(this.apiUrl, messageData);

    // Como todavía no tenemos el backend listo, vamos a SIMULAR que funciona:
    return of({ success: true }).pipe(delay(1000));
  }
}