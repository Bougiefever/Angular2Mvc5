
import {Component, ContentChildren, QueryList} from "@angular/core";
import {Hero} from "./hero";


const HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];

@Component({
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: 'heroes.html',
    styleUrls: ['lesson.css']
})
export class Heroes {

    @ContentChildren(Hero)
    heroes: QueryList<Hero>;

    get styles() {
        return { 'color': 'pink', 'text-decoration': 'underline' };
    }

    classes(hero: Hero) {
        return {
            marvel: hero.marvel,
            hulk: hero.name === "Hulk"
        };
    }
}