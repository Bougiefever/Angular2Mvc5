"use strict";
var Observable_1 = require("rxjs/Observable");
function initObservable() {
    console.log('observable');
    var click$ = Observable_1.Observable.fromEvent(document, 'click');
    var mouse$ = Observable_1.Observable.fromEvent(document, 'mousemove')
        .filter(function (move) { return move.clientY >= 200; });
    var combined$ = Observable_1.Observable.combineLatest(mouse$, click$);
    combined$.subscribe(function (c) { return console.log(c[0]); });
}
exports.initObservable = initObservable;

//# sourceMappingURL=init-observable.js.map
