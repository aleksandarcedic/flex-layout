import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-grid-area-row-span',
  styleUrls: [
    'gridArea.demo.css',
  ],
  template: `
    <mat-card class="card-demo">
      <mat-card-title><a
          href="http://stackoverflow.com/questions/37039029/flex-css-rowspan-2-and-colspan-2"
          target="_blank">StackOverflow</a></mat-card-title>
      <mat-card-subtitle>Grid Area with Column and Row Span... [Click to change direction!]
      </mat-card-subtitle>
      <mat-card-content>
        <div class="containerX" [fxLayout]="'row'+direction" (click)="toggleDirection()"
             style="cursor: pointer;">
          <div fxFlex [fxLayout]="'column'">
            <div class="one   flexitem " fxFlex> A</div>
            <div class="two   flexitem " fxFlex> B</div>
            <div class="three flexitem " fxFlex> C</div>
          </div>
          <div fxFlex="67" [fxLayout]="'column'+direction">
            <div fxLayout="row" fxFlex="33%">
              <div class="five  flexitem " fxFlex> E</div>
              <div class="five  flexitem " fxFlex> F</div>
            </div>
            <div class="four  flexitem " fxFlex> D</div>
          </div>
        </div>
      </mat-card-content>
      <mat-card-footer class="bottomPad">
        <div class="hint">Current direction: &lt;fxLayout="row{{ direction }}"&gt;</div>
      </mat-card-footer>
    </mat-card>
  `
})
export class DemoGridAreaRowSpan {
  direction = '';

  toggleDirection() {
    let next = (DIRECTIONS.indexOf(this.direction) + 1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
}

const DIRECTIONS = ['', '-reverse'];
