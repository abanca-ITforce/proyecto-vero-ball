import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  countries$: Observable<any>;
  incomingLevels$: Observable<any>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.incomingLevels$ = this.api.getIncomingLevels$();

  }

  onSelect(selected) {
    // this.api.putIncomingLevel$(selected).subscribe();
    this.countries$ = this.api.getCountriesByFilter(selected);
  }


}
