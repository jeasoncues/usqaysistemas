import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { PayuService } from 'src/app/services/payu.service';
import { FormContactComponent } from 'src/app/shared/form-contact/form-contact.component';
import { FormPayuComponent } from './form-payu/form-payu.component';
import { DATA } from './product-detail.data'

declare var particlesJS: any;

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    @HostListener("window:scroll", ['$event']) onScroll(e: any) {
        let scrollTop = e.target.scrollingElement.scrollTop ? e.target.scrollingElement.scrollTop : 0
        let elementTop = this.tplanes.nativeElement.offsetTop

        if (elementTop - 100 < scrollTop && this.canShowContact) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.openDialogContact()
            }, 10000)
        }
    }

    @ViewChild('tplanes') tplanes: ElementRef;

    timeout
    canShowContact = true

    data: any = {};
    data_venta = {};

    constructor(
        private route: ActivatedRoute,
        private payu: PayuService,
        private snack: MatSnackBar,
        private dialog: MatDialog,
        private cart: CartService,
        private router: Router,
    ) { }

    openDialogContact() {
        // let dialogContact = this.dialog.open(FormContactComponent, {
        //     maxHeight: '90vh',
        //     data: {
        //         fromDialog: true,
        //     }
        // })
        // dialogContact.afterClosed().subscribe(() => {
        //     clearTimeout(this.timeout)
        //     this.canShowContact = false
        // })
    }

    ngOnInit(): void {
        particlesJS.load('particles-js', 'assets/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });

        this.route.params.subscribe(params => {
            this.data = DATA[params['product']]
        })

        this.canShowContact = true

        this.initCupos();
    }

    openPay(item) {

        console.log(item)
        clearTimeout(this.timeout)
        this.canShowContact = false

        this.payu.obtenerData({ code: item.code, monto: item.precio }).subscribe((res: any) => {
            console.log(res)

            if (res.ok) {
                this.data_venta = res.data

                let dialogPay = this.dialog.open(FormPayuComponent, {
                    data: res.data
                })
                dialogPay.afterClosed().subscribe(() => {
                    this.openDialogContact()
                })

            } else {
                this.snack.open(res.msg, 'Cerrar', { duration: 3000 })
            }
        })
    }

    agregarCarrito(item) {
        console.log(item, this.data)

        let add = {
            nombre: this.data.nombre + ' ' + item.nombre,
            descripcion: this.data.subtitle,
            cantidad: 1,
            precio: item.precio,
            code: item.code,
            is_system: true,
        }
        // this

        this.cart.nuevo(add)

        console.log(add)

        this.snack.open('Sistema agregado al carrito de compras', 'Cerrar', { duration: 3000 })
        this.router.navigate(['cart'])
    }

    scroll(el: HTMLElement) {
        el.scrollIntoView()
    }

    // playVideo(el: HTMLElement) {
    //     console.log(el)
    // }

    cupos = []

    initCupos() {
        let disminucion = 0;

        let array_saved: Array<any> = JSON.parse(localStorage.getItem('cupos'))
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        let fecha_saved = localStorage.getItem('fecha')

        if (array_saved && fecha_saved && fecha_saved == date) {
            array_saved.forEach((i, index) => {
                disminucion = Math.floor(Math.random() * 2)
                array_saved[index] -= disminucion
                if (array_saved[index] <= 0) array_saved[index] = 1
            })
        } else {
            array_saved = []
            disminucion = Math.floor(Math.random() * 2)
            array_saved.push(10 - disminucion)
            disminucion = Math.floor(Math.random() * 2)
            array_saved.push(15 - disminucion)
            disminucion = Math.floor(Math.random() * 2)
            array_saved.push(20 - disminucion)
        }

        localStorage.setItem('cupos', JSON.stringify(array_saved))
        localStorage.setItem('fecha', date)

        this.getCupos()
    }

    getCupos() {
        let array_saved = JSON.parse(localStorage.getItem('cupos'))

        if (array_saved) {
            this.cupos = array_saved;
        }
    }

}
