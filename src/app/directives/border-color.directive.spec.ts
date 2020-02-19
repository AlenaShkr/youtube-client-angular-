import { BorderColorDirective } from './border-color.directive';
import { Renderer2, ElementRef } from '@angular/core';

describe('BorderColorDirective', () => {
  it('should create an instance', () => {
    const directive: BorderColorDirective = new BorderColorDirective(this.ElementRef, this.Renderer2);
    expect(directive).toBeTruthy();
  });
});
