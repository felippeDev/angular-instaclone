import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { bannerImage } from './bannerImage.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('bannerAnimation', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public animationState: string = 'hidden';

  public bannerImages: bannerImage[] = [
    { state: 'visible', url: '/assets/access-banner/img_1.png' },
    { state: 'hidden', url: '/assets/access-banner/img_2.png' },
    { state: 'hidden', url: '/assets/access-banner/img_3.png' },
    { state: 'hidden', url: '/assets/access-banner/img_4.png' },
    { state: 'hidden', url: '/assets/access-banner/img_5.png' },
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.bannerImageRotation();
    }, 2000);
  }
  bannerImageRotation(): void {
    let currentImageIndex: number;

    for (let i = 0; i < this.bannerImages.length; i++) {
      if (this.bannerImages[i].state === 'visible') {
        this.bannerImages[i].state = 'hidden';

        currentImageIndex = i === 4 ? 0 : i + 1;

        break;
      }
    }

    this.bannerImages[currentImageIndex].state = 'visible';

    setTimeout(() => {
      this.bannerImageRotation();
    }, 2000);
  }
}
