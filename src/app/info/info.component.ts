import { Component, Input, OnInit, SimpleChange, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() numberInfo: any;
  @Input() nameInfo: any;

  constructor() { }

  newNumber: any;

  ngOnChanges(changes: SimpleChanges) {
    const num: SimpleChange = changes.numberInfo;
    console.log('onChanges - previous', num.previousValue) 
    console.log('onChanges - current', num.currentValue) 
  }

  ngOnInit() {
    console.log('onInit')    
    console.log(this.nameInfo)
  }

  ngDoCheck() {
    console.log('doCheck', this.nameInfo)
  }

  ngAfterContentInit() {
    console.log('afterContentInit')
  }

  ngAfterContentChecked() {
    console.log('afterContentCheck')
  }

  ngAfterViewInit() {
    console.log('afterViewInit')
  }

  ngAfterViewChecked() {
    console.log('afterViewCheck')
  }

  ngOnDestroy() {
    console.log('onDestroy')
  }

}
