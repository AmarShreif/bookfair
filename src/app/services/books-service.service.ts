import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {
  private readonly http = inject (HttpClient)

  getBooks():Observable<any>{
    return this.http.get(`https://gutendex.com/books/`)
  }
  getAllPages(pageNum:any):Observable<any>{
    return this.http.get(`https://gutendex.com/books/?page=${pageNum}`)
  }
  
  getBookBySearch(searchItem:any):Observable<any>{
    return this.http.get(`https://gutendex.com/books/?search=${searchItem}`)
  }
   getDetailsBook(id:string | null):Observable<any>{
    return this.http.get(`https://gutendex.com/books/?ids=${id}`)
  }
}
