import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  incomingLevels = this.api.getIncomingLevels();
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
