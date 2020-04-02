import { fromEvent } from 'rxjs';

/*
 * Eventos del Dom (Observable) 
 */

const src1$ = fromEvent<any>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

// Observer

const observer =  {
    next: val => console.log('next ',val)
};

// Me subscribo al observer

// click del mouse

src1$.subscribe(({x,y}) => {
    console.log(x,y);
});

// tecla presionada

src2$.subscribe( evento => {
    console.log( evento.key);
});

