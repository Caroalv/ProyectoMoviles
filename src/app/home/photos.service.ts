import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Importa Observable

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any[]> { // Especifica el tipo de retorno Observable<any[]>
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos?_limit=15');
  }
}
