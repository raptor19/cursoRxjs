import { Observable, Observer } from 'rxjs';

// Este es el observer

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.log('error [error]: ',error),
    complete: () => console.info('completado [obs]')
};

// Este es el observable

const obs$ = new Observable<string>( subs => {
    subs.next("Hola 1");
    subs.next("Hola 2");    
    subs.next("Hola 3");
    subs.next("Hola 4");
    subs.complete();
    subs.next("Hola 5");
    subs.next("Hola 6");
});

//obs$.subscribe(observer);


