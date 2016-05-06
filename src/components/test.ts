import {Component} from 'angular2/core';
//import {ol} from '../vendor';

@Component({
  selector: 'test',
  template: 'Hello from component: {{ test }}',
  styles: [require('./test.styl').toString()]
})
export class TestComponent {
  public test: string = 'The test component';
  constructor() {}
}

