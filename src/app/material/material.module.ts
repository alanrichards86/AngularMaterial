import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Materials
import { MatButtonModule, MatToolbarModule, MatGridListModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatFormFieldModule, MatInputModule],
})

export class MaterialModule { }