import { Component, OnInit, Input } from '@angular/core';
import { ResultCard } from '../../models/result-card.model';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})

export class ResultCardComponent implements OnInit {
  public resultCard: ResultCard;
  @Input() public card: ResultCard;
  public color: string;

  constructor() { }

  public ngOnInit(): void {
    this.color = defineColor(this.card.snippet.publishedAt);
  }
  public ngOnChange(): void {
    this.color = defineColor(this.card.snippet.publishedAt);
  }
}

function defineColor(el: string): string {
  const publishDateInMilisec: number = Date.parse(el);
  const nowDate: number = Date.now();
  const duration: number = nowDate - publishDateInMilisec;
  const durationDay: number = Math.floor(duration / (1000 * 60 * 60 * 24));
  if (durationDay < 7 ) {
    return 'blue';
  }
  if (durationDay >= 7 && durationDay <= 30) {
    return 'green';
  }
  if (durationDay > 30 && durationDay <= 180) {
    return 'yellow';
  }
  if (durationDay > 180) {
    return 'red';
  }
}
