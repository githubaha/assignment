import { Component } from '@angular/core';

@Component({
    selector: 'app-success',
    template: '<h2>This is from SuccessAlertComponent</h2>',
    styles: [`
       h2{
         text-align: center;
         font-family: 'Times New Roman', Times, serif;
         font-size: 25;
         color: blueviolet;
        }
    `]
})

export class SuccessAlertComponent {

}

