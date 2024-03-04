import { number } from "echarts";

export class NgxDatable {
  idP: number;
  nameP: string;
  etatP: string;
  synchro: number;
  
  constructor(id:number, name:string, etat:string, synchro:number){
    {
   this.idP = id; 
   this.nameP = name;
   this.etatP = etat;
   this.synchro = synchro; 
      
    }
  }
  /*public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }*/
}
