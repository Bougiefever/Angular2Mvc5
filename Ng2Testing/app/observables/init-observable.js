"use strict";
var Observable_1 = require("rxjs/Observable");
function initObservable() {
    console.log('observable');
    var imagesPromise = fetch('http://localhost/MediaApi/api/Image').then(function (res) { return res.json(); });
    var images$ = Observable_1.Observable.fromPromise(imagesPromise);
    images$.subscribe(function (images) { return console.log("images " + JSON.stringify(images)); }, function (erro) { return console.log('error! ' + erro); }, function () { return console.log('done'); });
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
exports.initObservable = initObservable;

//# sourceMappingURL=init-observable.js.map
