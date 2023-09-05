import { Component, ViewChild } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade,
  SwiperOptions,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  active = 1;

  ngOnInit(): void {
    SwiperCore.use([
      EffectFade,
      Navigation,
      Pagination,
      Scrollbar,
      A11y,
      Virtual,
      Zoom,
      Autoplay,
      Thumbs,
      Controller]);
  }


  config: SwiperOptions = {
    slidesPerView: 1,
    // spaceBetween: 50,
    loop: true,
    autoplay:{
      delay:1500,
      disableOnInteraction:false
    },
    pagination:{
      type:"custom",
      clickable:true
    }
  };
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  slides = [
    {
      image: 'assets/slide.jpeg'
    },
    {
      image: 'assets/slide.jpeg'
    },
    {
      image: 'assets/slide.jpeg'
    },
  ]

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }
}
