import {Directive, HostBinding, HostListener, Input} from 'angular2/core';

@Directive({
    selector: '[mwFavorite]'
})

export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;

    @HostListener('mouseenter')
    onMouseEnter() {
        this.hovering = true;
    }

    @HostListener('mouseleave') 
    onMouseleave() {
        this.hovering = false;
    }

    @Input()
    set mwfavorite(value) {
        this.isFavorite = value;
    }
}