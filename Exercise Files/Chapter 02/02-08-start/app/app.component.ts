import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';

@Component({
    selector: 'media-tracker-app',
    directives: [MediaItemComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {

    onMediaItemDeleted(mediaItem) {
        
    }

    firstMediaItem = {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: 1239878848932,
        isFavourite: false
    };
}