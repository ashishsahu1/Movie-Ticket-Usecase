import { Component, OnInit,OnDestroy } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, OnDestroy {
   images = [
      "https://i.imgur.com/xcb5Q.jpg",
      "https://i0.wp.com/www.heyuguys.com/images/2010/06/Inception-Banner-4.jpg",
      "https://wallpaperaccess.com/full/1076854.jpg",
      "https://pbs.twimg.com/media/FxnDCW0aUAAF4h0?format=jpg&name=large",
      "https://longboxheroes.com/_wp/wp-content/uploads/2014/07/captain-america-the-winter-soldier-2014-movie-banner-poster.jpg",
      "https://www.matrixresurrections.net/images/share.jpg",
      "https://www.bollywoodhungama.com/wp-content/uploads/2022/11/Pathaan-6.jpg",
      "https://cdna.artstation.com/p/assets/images/images/017/022/542/large/amirhosein-naseri-desktop-screenshot-2019-04-03-18-17-47-11.jpg?1554338571",
      "https://stream.myjosh.in/stream/prod-ugc-contents/challenge_banners/27022f24bb7f4645/9d13da57c718690c/27022f24bb7f46459d13da57c718690c.jpg",

   ]

  currentSlideIndex: number = 0;
  slideInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.startSlideTimer();
  }

  ngOnDestroy(): void {
    this.stopSlideTimer();
  }

  startSlideTimer(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 2000); // Set the interval time (in milliseconds) for sliding to the next image
  }

  stopSlideTimer(): void {
    clearInterval(this.slideInterval);
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }
}
