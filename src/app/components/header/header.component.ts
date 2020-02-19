import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public urlLogo: string = '../../assets/icon/logo.svg';
  public isShowCriteriaBlock: boolean = true;

  constructor() { }

  public handleClick(): void {
    this.isShowCriteriaBlock = !this.isShowCriteriaBlock;
  }

  public ngOnInit(): void {
  }

}
