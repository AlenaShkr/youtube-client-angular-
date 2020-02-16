import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  urlLogo: string = '../../assets/icon/logo.svg';
  public handleClick(event: Event): void {
    console.log('hi');
  }

  public ngOnInit(): void {
  }

}
