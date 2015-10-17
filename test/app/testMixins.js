import { Find, Simulate } from 'legit-tests/middleware';

export function clickButton(idx) {
  Find.call(this, 'button');
  this.elements = { button: this.elements.button[idx] };
  Simulate.call(this, {method: 'click', element: 'button'});
}
