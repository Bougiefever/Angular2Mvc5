import { Observable } from 'rxjs/Observable';
declare function fetch(url: string);

export function initObservable() {
    console.log('observable');

    const click$ = Observable.fromEvent(document, 'click');

    const mouse$ = Observable.fromEvent(document, 'mousemove')
        .filter((move: MouseEvent) => move.clientY >= 200);

    const combined$ = Observable.combineLatest(mouse$, click$);
    combined$.subscribe(c => console.log(c[0]));
}