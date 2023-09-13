import { Component } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component {
  active = 1;


  allcards = [
    {
      number: "3000+",
      name: 'transporters',
      images: ["assets/Ellipse 254.svg", "assets/Ellipse 255.svg", "assets/Ellipse 256.svg", "assets/Ellipse 257.svg"]
    },
    {
      number: "690+",
      name: 'locations covered',
      images: ["assets/Ellipse 254.svg", "assets/Ellipse 255.svg", "assets/Ellipse 256.svg", "assets/Ellipse 257.svg"]
    },
    {
      number: "72K+",
      name: 'inquiries till date',
      images: ["assets/Ellipse 254.svg", "assets/Ellipse 255.svg", "assets/Ellipse 256.svg", "assets/Ellipse 257.svg"]
    },
  ]


}
