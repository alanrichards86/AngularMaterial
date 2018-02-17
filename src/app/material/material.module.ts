import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Materials
import { 
    MatButtonModule, MatToolbarModule, MatGridListModule, MatInputModule, MatCardModule,
    MatListModule 
        } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatListModule],
    exports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatListModule],
})

export class MaterialModule { }