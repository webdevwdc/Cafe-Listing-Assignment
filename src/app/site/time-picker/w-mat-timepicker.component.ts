
import { Component, Input} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { WTimeDialogComponent } from './w-time-dialog.component';

import * as moment from 'moment';

@Component({
    selector: 'w-mat-timepicker',
    styleUrls: ['./w-mat-timepicker.component.scss'],
    templateUrl: './w-mat-timepicker.component.html'
})
export class WMatTimePickerComponent {

    @Input() placeholder :string = '';
    @Input() formControlName :string = '';
    public hour = 10;
    public minute = 25;
    public meridien = 'PM';
    constructor(public dialog: MatDialog) {     }


    public getTime(): string {

        return `${this.hour}:${this.minute} ${this.meridien}`;
    }

    public showPicker($event) {

        let dialogRef = this.dialog.open(WTimeDialogComponent, {
            data: {
                hour: this.hour,
                minute: this.minute,
                meriden: this.meridien
            }
        });

        dialogRef.afterClosed().subscribe(result => {

            // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
            if (result === undefined) {
                return;
            } else if (result !== -1) {

                this.hour = result.hour;
                this.minute = result.minute;
                this.meridien = result.meriden;
            }
        });

        return false;
    }
}
