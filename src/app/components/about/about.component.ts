import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  texts:string[];
  constructor(private AboutService: AboutService) { }

  async ngOnInit() {
    this.texts = await this.AboutService.getP();
    console.log(this.texts);
    
  }

}
