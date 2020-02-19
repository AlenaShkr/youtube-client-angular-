import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result.model';
import * as dataFile from '../../../assets/data/data.json';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public cards: Object[] = dataFile.items;
  public searchResult: SearchResult;

  constructor() { }
  public ngOnInit(): void {
  }
}
