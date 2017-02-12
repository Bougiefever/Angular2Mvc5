"use strict";
var Observable_1 = require("rxjs/Observable");
function initObservable() {
    var keys$ = Observable_1.Observable.fromEvent(document, 'keyup');
}
exports.initObservable = initObservable;

//# sourceMappingURL=init-observable.js.map
