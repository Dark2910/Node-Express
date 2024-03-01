const EventListener = require('events');
/* console.log(EventListener); */

/**
 *  El módulo events nos permite, definir, emitir y escuchar eventos
 */

const emisorProductos = new EventListener;

emisorProductos.on('compra', () => {
    console.log('event buy');
})

emisorProductos.emit('compra');