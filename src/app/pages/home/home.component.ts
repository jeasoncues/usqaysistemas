import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CLIENTES, PORQUE_NOS_ELIGEN } from './home.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    lazyLoad: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false,
  }

  porque_nos_eligen = PORQUE_NOS_ELIGEN;
  clientes = CLIENTES;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.playVideoBack()
    }, 1000)
  }

  playVideoBack() {
    let media = this.videoPlayer.nativeElement
    media.muted = true
    media.play()
  }

}
