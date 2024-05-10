import { Component } from '@angular/core';

@Component({
  selector: 'app-teams-images',
  templateUrl: './teams-images.component.html',
  styleUrls: ['./teams-images.component.scss']
})
export class TeamsImagesComponent {

  constructor() { }

  ngOnInit(): void {



  }

  team = [
    {
      image: 'assets/team/1.jpeg',
      name: 'Rishit Rahmikant Ajmera',
      role: 'Business Development Executive'
    },
    {
      image: 'assets/team/7.jpg',
      name: 'Syeda Jerifa Tasnim',
      role: 'HR Manager'
    },
    {
      image: 'assets/team/2.JPG',
      name: 'Sharan Nayak',
      role: 'Chief Operating Officer'
    },
    {
      image: 'assets/team/3.jpg',
      name: 'Gulshan Mishra',
      role: 'Business Development Executive'
    },
    {
      image: 'assets/team/4.jpeg',
      name: 'Puja Jha',
      role: 'Business Development Executive'
    },
    {
      image: 'assets/team/5.jpeg',
      name: 'Vrushank Y.B',
      role: 'Marketing Executive'
    },
    {
      image: 'assets/team/6.png',
      name: 'Likith Gowda',
      role: 'Business Development Executive'
    },
  ]

}
