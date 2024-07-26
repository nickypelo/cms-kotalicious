import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  
  screenWidth!: number;
  slidesPerView: number = 3;

  @HostListener('window:resize')
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <=640){
      this.slidesPerView = 1;
    }
    else if(this.screenWidth >= 640 && this.screenWidth <= 850){
      this.slidesPerView = 2;
    }
    else if(this.screenWidth >= 948 && this.screenWidth <= 1024){
      this.slidesPerView = 3;
    }
  }

  carouselItems = [
    { src: '../../../assets/review1.jpg', alt: 'review_1' },
    { src: '../../../assets/review2.jpg', alt: 'review_2' },
    { src: '../../../assets/review3.jpg', alt: 'review_3' },
    { src: '../../../assets/review4.jpg', alt: 'review_4' },
    { src: '../../../assets/review5.jpg', alt: 'review_5' }
  ];

  ngOnInit(): void {
  }
}
