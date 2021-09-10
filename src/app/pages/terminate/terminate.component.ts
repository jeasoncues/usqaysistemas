import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-terminate',
  templateUrl: './terminate.component.html',
  styleUrls: ['./terminate.component.scss']
})
export class TerminateComponent implements OnInit {

  data: any

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cart: CartService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(res => {
      this.data = res

      console.log(this.data)
      if (this.data.vads_trans_status != 'ABANDONED') {
        this.cart.clean()
      } else {
      }
    })


  }

}
