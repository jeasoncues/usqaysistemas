import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { PayuService } from 'src/app/services/payu.service';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';
import { FormPayuComponent } from '../product-detail/form-payu/form-payu.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormDatosCartComponent } from './form-datos-cart/form-datos-cart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carrito = []
  subtotal = 0
  descuento = 0
  total = 0
  value_cupon = ''
  descuento_cupon = ''
  id_cupon = null
  catalogo = []
  datos: any = {}
  loading_cupon = false

  constructor(
    private cart: CartService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private api: ApiService,
    private payu: PayuService,
  ) { }

  ngOnInit(): void {
    this.loadDatosCart()
    this.loadCarrito()
    this.loadCatalogo()
    if (!this.datos.email) {
      this.openFormDatos()
    }
  }

  loadCatalogo() {
    this.api.POST('get_equipos', { ciudad_id: this.datos.ciudad_id }).subscribe((res: any) => {
      this.catalogo = res.data
    })
  }

  loadCarrito() {
    this.carrito = this.cart.getCart()
    this.carrito = this.carrito.sort((a, b) => a.is_system)

    this.actualizarTotal()
  }

  actualizarTotal() {
    this.subtotal = 0
    this.total = 0
    this.carrito.forEach(item => {
      // if (!item.cantidad) item.cantidad = 1
      this.subtotal += item.precio * item.cantidad
    })
    this.total = this.subtotal - this.descuento
  }

  eliminar(index) {
    this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar el item <br> del carrito de compras?'
    }).afterClosed().subscribe(res => {
      if (res) {
        this.cart.delete(index)
        this.loadCarrito()
        this.snack.open('Producto eliminado correctamente', 'Aceptar', {
          duration: 3000
        })
      }
    })
  }

  openCatalogo() {
    this.dialog.open(CatalogoComponent, {
      width: '80vw',
      height: '90vh',
      data: this.catalogo
    }).afterClosed().subscribe(() => {
      this.loadCarrito()
    })
  }

  cambiarCantidad(item, multiplicador) {
    item.cantidad += multiplicador
    if (item.cantidad <= 0) item.cantidad = 1
    this.actualizarTotal()
  }

  aplicarCupon() {

    this.loading_cupon = true
    this.api.POST('aplicar_cupon', { codigo: this.value_cupon }).subscribe((res: any) => {
      if (res.ok) {
        this.descuento = res.data.monto
        this.descuento_cupon = this.value_cupon
        this.id_cupon = res.data.id
        this.snack.open('Cupón aplicado!', 'Aceptar', {
          duration: 3000
        })
      } else {
        this.descuento = 0
        this.descuento_cupon = ''
        this.snack.open(res.message, 'Aceptar', {
          duration: 3000
        })
      }
      this.actualizarTotal()
    }, null, () => this.loading_cupon = false)
  }

  openPay() {

    let data = this.buildToApi()

    this.payu.obtenerData(data).subscribe((res: any) => {
      console.log(res)

      if (res.ok) {

        this.cart.saveUid(res.data.venta_id)

        let dialogPay = this.dialog.open(FormPayuComponent, {
          data: res.data
        })
        dialogPay.afterClosed().subscribe(() => {
          // this.openDialogContact()
        })

      } else {
        this.snack.open(res.msg, 'Cerrar', { duration: 3000 })
      }
    })
  }

  buildToApi() {

    let carrito_to_api = []

    this.carrito.forEach(item => {
      carrito_to_api.push({
        id: item.id,
        precio: item.precio,
        cantidad: item.cantidad,
        is_system: item.is_system ? 1 : 0,
        code: item.code,
      })
    })

    return {
      id: this.cart.getUid(),
      cupon_id: this.id_cupon,
      ciudad_id: this.datos.ciudad_id,
      subtotal: this.subtotal,
      descuento: this.descuento,
      total: this.total,
      email: this.datos.email,
      items: carrito_to_api
    }
  }

  loadDatosCart() {
    this.datos = this.cart.getDatos()
  }

  openFormDatos() {

    let dialogDatos = this.dialog.open(FormDatosCartComponent, {

    })
    dialogDatos.afterClosed().subscribe(() => {
      this.loadDatosCart()
      this.loadCatalogo()
    })
  }

}
