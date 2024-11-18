import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefundComponent } from 'src/app/Components/refund/refund.component';
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
  messagesent: any = ''
  conatctform!: FormGroup;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }


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


    this.conatctform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  allcards = [
    {
      number: "15K+",
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
    loop: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,

    },
    pagination: {
      type: "bullets",
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      el: '.swiper-custom-pagination',
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
      image: 'assets/Screenshot 2023-08-05 at 8.55 1.svg'
    },
    // {
    //   image: 'assets/Screenshot 2023-08-05 at 8.55 1.svg'
    // },
    // {
    //   image: 'assets/Screenshot 2023-08-05 at 8.55 1.svg'
    // },
  ]

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }

  openpopup() {
    const modalRef = this.modalService.open(RefundComponent, {
      size: "lg", centered: true, backdrop: 'static', keyboard: false
    });
  }



  Submit() {
    if (this.conatctform.valid) {
      console.log(this.conatctform.value);
      this.messagesent = 'Message Send Successfully.'
      this.conatctform.reset()

    }
  }

}
