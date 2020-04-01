import { Observable, Observer } from 'rxjs';

// Este es el observer

const observer: Observer<any> = {
    next: value => console.log('siguiente: ', value),
    error: error => console.log('error: ',error),
    complete: () => console.info('completado: ')
};

// Este es el observable

const intervalos$ = new Observable<any>( subscriber => {
   let c = 0;
   const interval = setInterval( () => { // por cada segundo emite un numero 
        subscriber.next(c++);
    },2500)
   // devuelvo una funcion
   return () => {
       clearInterval(interval);
   }
});

// Me subscribo al observable

// const subs = intervalos$.subscribe( num => console.log('Num: ', num));

// Para subscribir observables en cadena
// subs.add(subs2).add(subs3);

// Me des-suscribo al observer despues de 7 seg


/*setTimeout(() => {
    subs.unsubscribe()    
},7000);*/





