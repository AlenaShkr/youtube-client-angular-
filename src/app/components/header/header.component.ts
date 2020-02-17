import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  urlLogo: string = '../../assets/icon/logo.svg';
  isShowCriteriaBlock: boolean = true;
  public handleClick(): void {
    this.isShowCriteriaBlock = !this.isShowCriteriaBlock;
  }

  public ngOnInit(): void {
  }

}
