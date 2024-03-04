import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clients } from './clients.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends UnsubscribeOnDestroyAdapter {
  
  isTblLoading = true;
  dataChange: BehaviorSubject<Clients[]> = new BehaviorSubject<Clients[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Clients;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Clients[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllClients(): void {
    this.subs.sink = this.httpClient.get<Clients[]>("http://localhost:8080/GetAllEmployee").subscribe({
      next: (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      },
    });
  }
  addClient(clients: Clients): void {
    this.httpClient.post<Clients>('http://localhost:8080/AddEmployee', clients)
      .subscribe(
        (data: Clients) => {
          
          console.log('Client added successfully:', data);
         
        },
        (error) => {
          console.error('Failed to add Client:', error);
        }
      );
  }
  
  updateClient(clients: Clients): void {
    this.dialogData = clients;

     this.httpClient.put("http://localhost:8080/UpdateEmployee"+ clients.id, clients)
         .subscribe({
           next: (data) => {
             this.dialogData = clients;
          },
          error: (error: HttpErrorResponse) => {
              // error code here
           },
         });
  }

  deleteClient(id: number): void {
    this.httpClient.delete<void>(`http://localhost:8080/DeleteEmployee/${id}`).subscribe(

      (data: void) => {
        console.log('deleted successfully:', data);
        
      },
      (error) => {
        console.error('Failed to delete ', error);
      }
    );
   
    
  }

 
}
