import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  name: string;
  roll: string;
  arrLetters: string[];
  counter: number;

  constructor(private AuthorService: AuthorService) {
    this.arrLetters = [];
    this.counter = 0;
  }

  async ngOnInit() {
    this.name = await this.AuthorService.getName();
    this.roll = await this.AuthorService.getRoll();


    setTimeout(() => {
      this.arrLetters.push("_");
      setTimeout(() => {
        let timer = setInterval(() => {
          if (this.counter < this.roll.length) {
            this.arrLetters.splice(this.counter, 1);
            let letter = this.roll.substr(this.counter, 1);
            this.arrLetters.push(letter);
            this.arrLetters.push("_");
          } else {
            clearInterval(timer);
            const span = document.querySelector("div#Inicio h2 span:last-child");
            span.classList.add("loop");
          }
          this.counter++
        }, 200);

      }, 500);
    }, 7000);








  }


}
