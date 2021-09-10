import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<CatalogoComponent>,
    private cart: CartService,
    private snack: MatSnackBar,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public catalogo: Array<any>
  ) { }

  ngOnInit(): void {
    // this.loadCatalogo()
  }

  loadCatalogo() {
    // this.api.GET('get_equipos').subscribe((res: any) => {
    //   this.catalogo = res.data
    // })
  }

  agregar(item) {

    item.cantidad = 1
    this.cart.nuevo(item)

    this.dialogo.close()
    this.snack.open('Producto agregado al carrito.', 'Aceptar', {
      duration: 3000
    })
  }

  isDisabledButton(item) {
    if (item.stocks.length == 0) {
      return true
    }

    if (item.stocks[0].stock <= 0) {
      return true
    }

    return false
  }

  getStock(item) {
    if (item.stocks.length == 0) {
      return 0
    }

    if (item.stocks[0].stock <= 0) {
      return 0
    }

    return item.stocks[0].stock
  }
}
