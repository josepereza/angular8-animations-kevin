import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate, useAnimation } from '@angular/animations';
import { fadeBlue, slide, bounceOutLeftAnimation, fadeInAnimation } from '../animations/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todoAnimation', [
      transition(':enter', useAnimation(fadeInAnimation, {
        params: {
          duration: '100ms'
        }
      })
      ),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
    // fadeBlue
    // trigger('fade',[
    //   state('void',style({
    //     opacity:0 
    //   })),
    //   transition(':enter, :leave',[
    //     style({
    //       backgroundColor: 'yellow',
    //     }),
    //     animate(2000),
    //   ]),
    //   // transition('void <=> *',[
    //   //   style({
    //   //     backgroundColor: 'yellow',
    //   //   }),
    //   //   animate(2000),
    //   // ]),
    //   // transition('*=>void',[
    //   //   animate(2000)
    //   // ])
    // ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
