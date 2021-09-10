import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() itemsBlue: boolean = false
  @Input() whiteLogo: boolean = false
  @Input() sticky: boolean = false
  @Input() limitScroll: number = 150
  @HostListener("window:scroll", ['$event']) onScroll(e: Event) {
    // console.log(e)
    this.scrollTop = this.getYPosition(e)
  }

  scrollTop = 0;
  isMenuOpen = false;

  constructor(private cart: CartService) { }

  openState: boolean = false

  ngOnInit(): void {
  }

  getYPosition(e: any): number {
    return e.target.scrollingElement.scrollTop ? e.target.scrollingElement.scrollTop : 0
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  getCountCart() {
    return this.cart.getCart().length
  }

}
