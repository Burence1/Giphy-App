// import { Giphy } from './../giphy';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyRequestService {

  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {} 

    getTrendingGifs() {
      return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.ApiKey}&limit=25&rating=g`)
      // .subscribe((response)=>{
      //   this.searchGifs.next(response.data); 
      // });
   }

  //  searchGifs(gifName: string){
  //    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.ApiKey}&limit=25&rating=g`);
  //  }
}
