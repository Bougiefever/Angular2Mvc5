import { Observable } from 'rxjs/Observable';

export function initObservable() {
    var keys$ = Observable.fromEvent(document, 'keyup');
}