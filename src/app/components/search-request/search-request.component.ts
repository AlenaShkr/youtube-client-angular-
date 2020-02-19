import { Component, OnInit, Input} from '@angular/core';
import * as dataFile from '../../../assets/data/data.json';

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.scss']
})

export class SearchRequestComponent implements OnInit {
  // @Input() public data1: string = "from request";
  public data: Object[] = dataFile.items;

  constructor() { }

  public ngOnInit(): void {
  }

  public handleClick(valueRequest: string): Object[] {
    return this.data;
  }
}
