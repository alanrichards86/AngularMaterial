import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Materials
import { MatButtonModule, MatToolbarModule, MatGridListModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatGridListModule],
    exports: [MatButtonModule, MatToolbarModule, MatGridListModule],
})

export class MaterialModule { }