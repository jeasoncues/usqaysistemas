import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private key_cart = "usq_cart"
  private key_uid = "usq_uid_store"
  private key_datos = "usq_datos_cart"

  constructor() { }

  getCart(): Array<any> {
    return JSON.parse(localStorage.getItem(this.key_cart)) ?? []
  }

  nuevo(value) {
    let carrito = this.getCart()

    carrito.push(value)

    this.saveCart(carrito)
  }

  delete(index) {
    let carrito = this.getCart()

    carrito.splice(index, 1);

    this.saveCart(carrito)
  }

  clean() {
    this.saveCart([])
    this.saveUid(null)
  }

  getUid() {
    return localStorage.getItem(this.key_uid)
  }

  getDatos() {
    return JSON.parse(localStorage.getItem(this.key_datos)) ?? {}
  }

  private saveCart(carrito: Array<any>) {
    localStorage.setItem(this.key_cart, JSON.stringify(carrito))
  }

  saveUid(uid: any) {
    localStorage.setItem(this.key_uid, uid)
  }

  saveDatos(datos: any) {
    localStorage.setItem(this.key_datos, JSON.stringify(datos))
  }


}
