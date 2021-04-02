import { GiphyRequestService } from './../giphy-service/giphy-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private giphyRequestService:GiphyRequestService) { }

  ngOnInit(): void {
  }
    // search(searchTerm: string){
    //   if(searchTerm !==''){
    //     this.giphyRequestService.searchGifs(searchTerm)
    //     .subscribe((response:any)=>{
    //       console.log('search Data', response)
    //     });
      // }

    }

