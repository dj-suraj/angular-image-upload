import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    upload(event) {

        const elem = event.target;
        if (elem.files.length > 0) {
            console.log(elem.files[0]);
            const formData = new FormData();
            formData.append('file', elem.files[0]);
            this.http.post('http://127.0.0.1:8000/api/upload', formData).subscribe(
                (data) => {
                    console.log(data);
                }
            );
        }
    }

}
