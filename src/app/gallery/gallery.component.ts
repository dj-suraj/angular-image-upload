import {Component, OnInit} from '@angular/core';
import {ImageService} from '../image.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    visibleImages: any[] = [];
    constructor(private _imageService: ImageService) {}

    ngOnInit() {
        this._imageService.getImages().subscribe(
            (res) => {
                this.visibleImages = res.result;
                console.log(this.visibleImages);
            }
        );
    }

}
