import { range, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators'; 

// defino un dos observables range de 5 valores

// el observable emite los valore multiplicados por 10

range(1,5).pipe(
    map<number,number>( val => {
        return val * 10
    }) 
).subscribe(console.log)

//el observable emite los valores multiplicados por 10 como texto

range(1,5).pipe(
    map<number,string>( val => {
        return (val * 10).toString()
    }) 
).subscribe(console.log)

// Defino un observable fromEvent para capturar el keyup de una tecla

const keyup$ = fromEvent<KeyboardEvent>( document,'keyup');
keyup$.subscribe( val => console.log( 'map', val ));

// filtro el observable con map

const keyupCode$ = keyup$.pipe(map( event => event.code ))
keyupCode$.subscribe( code => console.log('map',code));

// filtro el observable con pluck

const keyupPluck$ = keyup$.pipe(pluck( 'target', 'baseURI'));
keyupPluck$.subscribe( code => console.log('pluck',code));




