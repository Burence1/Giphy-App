import { HttpClient } from '@angular/common/http';
import { GiphyRequestService } from './../giphy-service/giphy-request.service';
import { Component, OnInit } from '@angular/core';
import { Giphy } from '../giphy';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.css']
})
export class GiphyListComponent implements OnInit {
  giphies:Giphy[];
  getTrendingGifs: any;

  constructor(private giphyRequestService: GiphyRequestService, private http:HttpClient) {
   }

  ngOnInit(): void{

    this.giphyRequestService.getTrendingGifs()
    .subscribe((response: any)=>{
      this.giphies = response.data;
    })
  }
}
