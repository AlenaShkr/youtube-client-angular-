import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public searchResult: SearchResult;

  constructor() { }

  public ngOnInit(): void {
  }

}
