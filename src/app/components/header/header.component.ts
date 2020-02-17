import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  urlLogo: string = '../../assets/icon/logo.svg';
  hide: boolean = true;
  public handleClick(): void {
    this.hide = !this.hide;
  }

  public ngOnInit(): void {
  }

}
