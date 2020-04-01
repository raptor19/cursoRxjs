import { Observable, Observer, Subject } from 'rxjs';

// Este es el observer

const observer: Observer<any> = {
    next: value => console.log('siguiente: ', value),
    error: error => console.log('error: ',error),
    complete: () => console.info('completado: ')
};

// Este es el observable

const intervalos$ = new Observable<number>( subscriber => {
   let num = 0;
    const interval = setInterval( () => { 
        num = Math.random();
            subscriber.next(num); 
            },2500);
    // devuelvo una funcion
    return () => {
       clearInterval(interval);
   }
});


/* Creo un Subject 
Caracteristicas:
    1-Casteo Multiple: Muchas subscripciones van a estar sujetas a este subject u Observable y sirve para distribuir la misma informacion a todos.
    2-Es un Observer
    3-Se maneja el next,error y complete
*/


const subject$ = new Subject();
intervalos$.subscribe(subject$);

// Me subscribo al subject

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


// Me des-suscribo al observer despues de 7 seg


setTimeout(() => { 
    subject$.next(10);
    subject$.complete();
},7000);





