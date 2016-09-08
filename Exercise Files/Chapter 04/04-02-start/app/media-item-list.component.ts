import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';
import {CategoryListPipe} from './category-list.pipe';
import {MediaItemService} from './media-item.service';

@Component({
    selector: 'media-item-list',
    directives: [MediaItemComponent],
    pipes: [CategoryListPipe],
    templateUrl: 'app/media-item-list.component.html',
    styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

    constructor (private MediaItemService: MediaItemService) {}

    ngOnInit() {
        this.mediaItems = this.MediaItemService.get();
    }

    onMediaItemDeleted(mediaItem) {
        this.MediaItemService.delete(mediaItem);
    }

    mediaItems;

}