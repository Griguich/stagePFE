import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { NgxDatable } from '../ngx-datatable/ngx-datatable.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    FileUploadComponent,
    MatButtonModule,
    NgxDatatableModule
  ],
})
export class AddClientComponent {
  clientForm: UntypedFormGroup;
  hide3 = true;
  agree3 = false;
  pointeuse! : NgxDatable ;

  


  constructor(private fb: UntypedFormBuilder ,private http : HttpClient ) {
    this.clientForm = this.fb.group({
      nameP: ['', [Validators.required]],
      etatP: ['', [Validators.required]],
      synchro: ['', [Validators.required]],
     
    });

     
  }
  onSubmit() {
    if (this.clientForm.valid) {
      const pointeuse: NgxDatable = {
        // Assuming id is not required for adding a new pointeuse
        nameP: this.clientForm.value.nameP,
        etatP: this.clientForm.value.etatP,
        synchro: this.clientForm.value.synchcro,
        idP: 0
      };
      
      this.addPointeuse(pointeuse);
    }
  }

  addPointeuse(pointeuse: NgxDatable): void {
    this.http.post<NgxDatable>('http://localhost:8080/AddPointeuse', pointeuse)
      .subscribe(
        (data: NgxDatable) => {
          console.log('Pointeuse added successfully:', data);
          
        },
        
      );
  }
  }

  

