import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    name = 'Directives';

    collapsed = false;

    onToggle(collapsed) {
        console.log(collapsed);
    }
}
