import { Component } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-car01',
  templateUrl: './car01.page.html',
  styleUrls: ['./car01.page.scss'],
})
export class Car01Page {

  car01:Car = {placa:'',marca:'',modelo:'',ano:'',km:''}
  public car01placa:string="";
  public car01marca:string="";
  public car01modelo:string="";
  public car01ano:string="";
  public car01km:string="";

  constructor(private storage:StorageService) { 

}
setStorage()
{
  let car01:Car={
    placa: this.car01placa,
    marca: this.car01marca,
    modelo: this.car01modelo,
    ano: this.car01ano,
    km: this.car01km,
  }
    
  this.storage.create("car01", JSON.stringify(car01));
}
async getStorage()
{  
  await this.storage.read("car01").then((data:any)=>{
      if(data.value)
      {
          let p=JSON.parse(data.value);
          this.car01=p;
      }
      else
        this.car01={placa:'',marca:'',modelo:'',ano:'',km:''};
    })

}
async updateStorage()
{  
  let car01:Car={
    placa: this.car01placa,
    marca: this.car01marca,
    modelo: this.car01modelo,
    ano: this.car01ano,
    km: this.car01km,
  }  
  await this.storage.create("car01", JSON.stringify(car01));
  
}
async deleteFromStorage()
{  
  await this.storage.delete("car01");
}  
async clearStorage()  
{ 
  await this.storage.clear();
}

}


