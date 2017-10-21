import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-flex-attribute-values',
  template: `
    <mat-card class="card-demo">
      <mat-card-title>Flex Attribute Values</mat-card-title>
      <mat-card-subtitle>Explore impact of non-numerical values for the 'fxFlex' API:
      </mat-card-subtitle>
      <mat-card-content>
        <div class="containerX">
          <div fxLayout="row wrap" class="colored box nopad">
            <div fxFlex="none"> [fxFlex="none"]</div>
            <div fxFlex> [fxFlex]</div>
            <div fxFlex="nogrow"> [fxFlex="nogrow"]</div>
            <div fxFlex="grow"> [fxFlex="grow"]</div>
            <div fxFlex="initial"> [fxFlex="initial"]</div>
            <div fxFlex="auto"> [fxFlex="auto"]</div>
            <div fxFlex="noshrink"> [fxFlex="noshrink"]</div>
            <div fxFlex="0"> [fxFlex="0"]</div>
          </div>
        </div>
      </mat-card-content>
      <mat-card-footer>
        <div class="hint">&lt;div fxLayout="row" fxLayoutWrap &gt;</div>
      </mat-card-footer>
    </mat-card>
  `
})
export class DemoFlexAttributeValues {
}
