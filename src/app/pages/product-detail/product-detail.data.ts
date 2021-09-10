export const DATA = {

    restaurantes: {
        nombre: 'Restaurantes',
        subtitle: 'Ideal para pollerías, bares, cevicherías, pubs, discotecas o cualquier negocio de venta de comida y bebidas con atención al público.',
        img: 'assets/restaurantes-dash.png',
        img2: 'assets/restaurantes.png',
        flayer: 'assets/flayer/res.pdf',
        video: 'assets/video/res.mp4',
        manual: 'https://drive.google.com/file/d/1cWKD73YP6egDQyGVBtejvL0lSanhOf9a/view?usp=drivesdk',
        topFeatures: [
            {
                icon: 'file-text',
                title: 'Facturación electrónica (Sujeta a Planes)'
            },
            {
                icon: 'cloud',
                title: 'Siempre disponible'
            },
            {
                icon: 'mail',
                title: 'Notificaciones por correo electrónico'
            },
            {
                icon: 'pie-chart',
                title: 'Reportes detallados y gráficos'
            },
            {
                icon: 'shopping-bag',
                title: 'Toma de pedidos desde cualquier dispositivo'
            },
            {
                icon: 'shield',
                title: 'Recepción de pedidos en cocina por ticketera o pantalla'
            },
            {
                icon: 'archive',
                title: 'Administración de Delivery y Pedidos para llevar'
            },
            {
                icon: 'archive',
                title: 'Administración múltiples almacenes'
            },
        ],
        planes: [
            /*{
                nombre: 'Inicia',
                code: 'res_inicia',
                precio: 1500,
                opciones: [
                    'Toma de Pedidos',
                    'Recepción de pedidos en cocina',
                    'Manejo de carta y generación de código QR',
                    'Facturación Electrónica (Sujeta a Planes)',
                ],
                opciones_incluye: [
                    'Capacitación General',
                    'Atención Telefónica Gratuita 30 días',
                ]
            }
            ,*/
            {
              nombre: 'Lite',
              code: 'res_lite',
              precio: 140,
              opciones: [
                  'Módulo de ventas',
                  'Módulo de reportes de ventas',
                  'Usuarios',
                  'Control de caja',
                  'Precuentas',
                  'Tickets de venta',
                  'Configuración local para uso celulares / tablets',
                  'Funcionamiento local',
                  'Backup (respaldo de información)',
                  'Boletas y Facturas (300 comprobantes mensuales de regalo)',
              ],
              opciones_incluye: [
                  'Capacitación General',
                  'Asistencia tecnica remota'
              ]
            },
            {
                nombre: 'Emprende',
                code: 'res_crece',
                precio: 290 ,
                opciones: [
                    'Módulo de ventas',
                    'Dashboard',
                    'Módulo Reportes Ventas',
                    'Usuarios',
                    'Control de caja',
                    'Precuentas',
                    'Tickets de venta',
                    'Arma tu menú',
                    'Configuración local',
                    'cloud',
                    'Backup',
                     'Boletas y facturas (500 comprobantes)',
                ],
                opciones_incluye: [
                    'Capacitación General',
                    'Asistencia tecnica remota',
                ]
            },
            {
                nombre: 'Premium',
                code: 'res_premium',
                precio: 390,
                opciones: [
                    'Módulo de ventas',
                    'Dashboard',
                    'Módulo de reporte ventas',
                    'Usuarios',
                    'Control de caja, Precuentas',
                    'Tickets de venta',
                    'Arma tu menú',
                    'Multiples almacenes',
                    'Compras, Kardex',
                    'Configuración local',
                    'Cloud, Backup',
        
                    'Boletas y facturas (1000 comprobantes)'
                    
                ],
                opciones_incluye: [
                    
                    'Capacitación General',
                    'Asistencia tecnica remota',
                ]
            },
        ]
    },

    pos: {
        nombre: 'Pos',
        subtitle: 'Ideal para minimarkets, distribuidoras, farmacias o cualquier negocio de compra y venta sea al por mayor o menor.',
        img: 'assets/pos-dash.jpeg',
        img2: 'assets/pos.jpeg',
        flayer: 'assets/flayer/pos.pdf',
        video: 'assets/video/pos.mp4',
        manual: 'https://drive.google.com/file/d/1mMeoLa76hIpxafspKCVXVwUUiKvDk0dS/view?usp=drivesdk',
        topFeatures: [
            {
                icon: 'file-text',
                title: 'Facturación electrónica (Sujeta a Planes)'
            },
            {
                icon: 'cloud',
                title: 'Siempre disponible'
            },
            {
                icon: 'mail',
                title: 'Notificaciones por correo electrónico'
            },
            {
                icon: 'pie-chart',
                title: 'Reportes detallados y gráficos'
            },
            {
                icon: 'shopping-bag',
                title: 'Vender en multiples dispositivos en simultaneo'
            },
            {
                icon: 'shield',
                title: 'Listo para lector de código de barras y etiquetadoras'
            },
            {
                icon: 'archive',
                title: 'Manejo de cuentas por cobrar y pagar'
            },
            {
                icon: 'archive',
                title: 'Administración múltiples almacenes'
            },
        ],
        planes: [
            {
               nombre: 'Lite',
               code: 'pos_lite',
               precio: 140,
               opciones: [
                   ''
               ]
            },
            {
                nombre: 'Emprende',
                code: 'pos_crece',
                precio: 290,
                opciones: [
                    'Ventas',
                    'Manejo de productos y servicios',
                    'Listo para lectora de código de barras e impresión de etiquetas',
                    'Facturación Electrónica (Sujeta a Planes)',
                    'Multiples almacenes',
                    'Cuentas por cobrar y pagar',
                ],
                opciones_incluye: [
                    'Capacitación General',
                    'Asistencia tecnica remota',
                ]
            },
            {
                nombre: 'Premium',
                code: 'pos_premium',
                precio: 390,
                opciones: [
                    'Plan Emprende (+)',
                    'Usqay Cloud',
                    'Notificaciones en tiempo real',
                ],
                opciones_incluye: [
                    'Capacitación General',
                    'Asistencia tecnica remota',
                ]
            },
        ]
    },

    hoteles: {
        nombre: 'Hoteles',
        subtitle: 'Ideal para la gestión de alojamientos como Hoteles, Hospedajes, Hostales, Bungalows.',
        img: 'assets/hoteles-dash.png',
        img2: 'assets/hoteles.jpg',
        flayer: 'assets/flayer/hot.pdf',
        video: 'assets/video/hot.mp4',
        topFeatures: [
            {
                icon: 'file-text',
                title: 'Facturación electrónica (Sujeta a Planes)'
            },
            {
                icon: 'cloud',
                title: 'Siempre disponible'
            },
            {
                icon: 'mail',
                title: 'Notificaciones por correo electrónico'
            },
            {
                icon: 'pie-chart',
                title: 'Reportes detallados y gráficos'
            },
            {
                icon: 'shopping-bag',
                title: 'Vender en multiples dispositivos en simultaneo'
            },
            {
                icon: 'shield',
                title: 'Venta de productos y servicios adicionales'
            },
            {
                icon: 'archive',
                title: 'Reservaciones'
            },
            {
                icon: 'archive',
                title: 'Administración de almacenes'
            },
        ],
        planes: [
           
            {
                nombre: 'Emprende',
                code: 'hot_crece',
                precio: 290,
                opciones: [
                    'Administración de Estadías',
                    'Reservaciones',
                    'Venta de Productos y Servicios',
                    'Facturación Electrónica (Sujeta a Planes)',
                    'Almacenes',
                ],
                opciones_incluye: [
                    'Capacitación General',
                    'Asistencia tecnica remota',
                ]
            },
            {
                nombre: 'Premium',
                code: 'hot_premium',
                precio: 390,
                opciones: [
                    'Plan Emprende (+)',
                    'Usqay Cloud',
                    'Notificaciones en tiempo real',
                ],
                opciones_incluye: [
                    'Capacitación General',
                    'Asistencia telefonica remota',
                ]
            },
        ]
    },


}