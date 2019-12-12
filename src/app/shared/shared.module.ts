import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberToArrayPipe } from './pipes/number-to-array.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        NumberToArrayPipe
    ],
    exports: [
        CommonModule,
        FormsModule,
        NumberToArrayPipe
    ],
})

export class SharedModule {
}
