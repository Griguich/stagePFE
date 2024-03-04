export class Clients {
  id: number;
  name: string;
  date: Date;
  hoursWorked: number;
 

  constructor(client: Clients) {
    {
      this.id = client.id ;
      this.name = client.name || '';
      this.date = client.date || '';
      this.hoursWorked = client.hoursWorked ;
      
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
