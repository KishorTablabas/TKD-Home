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
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component {
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

  images = [
    {
      img: 'assets/iPhone 13 mini - 11 1.svg',
    },
    {
      img: 'assets/iphone-12-mini--black(1).svg',
    },
    {
      img: 'assets/iPhone 13 mini - 11 2.svg'
    },
  ]





  config: SwiperOptions = {
    slidesPerView: 1,
    // spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      type: "bullets",
      clickable: true,
      bulletClass: 'my-custom-pagination-item',

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
