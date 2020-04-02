import { of } from 'rxjs';

// Este es el observable

const obs$ = of(1,2,3,4,5,6);
//const obs$ = of([1,2],{a:1, b:2},function(){})
      
// Este es el observer

obs$.subscribe( 
    next => {
    console.log('next: ',next),
    null,
    () => console.log('Terminamos la secuencia') 
});




