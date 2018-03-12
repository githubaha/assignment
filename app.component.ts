import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 public name = '';
 public guessedname = 'Bahtiyar';

   onClick() {
       if(this.name === this.guessedname){
          alert('Success Guessing!...');
       }else {
         alert('Wrong Guessing');
       }
   }
   
}
