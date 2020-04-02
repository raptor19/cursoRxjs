import { interval, timer } from 'rxjs';

// Observer

const observer = {
    next: val => console.log('next: ',val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);  

// Observable

const interval$ = interval(1000);
//const timer$ = timer(2000, 1000);
const timer$ = timer( hoyEn5 );  

// Subscripcion

console.log('inicio');
//interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('fin');
