import { Observable } from 'rxjs/Observable';
declare function fetch(url: string);

export function initObservable() {
    console.log('observable');
    const imagesPromise = fetch('http://localhost/MediaApi/api/Image').then(res => res.json());

    const images$ = Observable.fromPromise(imagesPromise)

    images$.subscribe(
        images => console.log(`images ${JSON.stringify(images)}`),
        erro => console.log('error! ' + erro),
        () => console.log('done')
    
        );

    //fetch('http://localhost/MediaApi/api/Images').then(res => {
    //    var it = res.json();
    //    return it;
    //})
    //.then(images => {
    //    debugger;
    //    console.log(images.data);
    //});

    //var keys$ = Observable.fromEvent(document, 'keyup') 
    //    .do ((keyUp: KeyboardEvent) => console.log(keyUp.key));

    //keys$.subscribe();
}