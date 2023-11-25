import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { Car } from 'src/app/interfaces/car';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-car01replist',
  templateUrl: './car01replist.page.html',
  styleUrls: ['./car01replist.page.scss'],
})
export class Car01replistPage implements OnInit, AfterViewInit {

  c01r01: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r01tipo: string = "";
  public c01r01data: string = "";
  public c01r01km: string = "";
  public c01r01custo: string = "";
  public c01r01shop: string = "";
  public c01r01obs: string = "";

  c01r02: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r02tipo: string = "";
  public c01r02data: string = "";
  public c01r02km: string = "";
  public c01r02custo: string = "";
  public c01r02shop: string = "";
  public c01r02obs: string = "";

  c01r03: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r03tipo: string = "";
  public c01r03data: string = "";
  public c01r03km: string = "";
  public c01r03custo: string = "";
  public c01r03shop: string = "";
  public c01r03obs: string = "";

  c01r04: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r04tipo: string = "";
  public c01r04data: string = "";
  public c01r04km: string = "";
  public c01r04custo: string = "";
  public c01r04shop: string = "";
  public c01r04obs: string = "";

  c01r05: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r05tipo: string = "";
  public c01r05data: string = "";
  public c01r05km: string = "";
  public c01r05custo: string = "";
  public c01r05shop: string = "";
  public c01r05obs: string = "";

  c01r06: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r06tipo: string = "";
  public c01r06data: string = "";
  public c01r06km: string = "";
  public c01r06custo: string = "";
  public c01r06shop: string = "";
  public c01r06obs: string = "";

  c01r07: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r07tipo: string = "";
  public c01r07data: string = "";
  public c01r07km: string = "";
  public c01r07custo: string = "";
  public c01r07shop: string = "";
  public c01r07obs: string = "";

  c01r08: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r08tipo: string = "";
  public c01r08data: string = "";
  public c01r08km: string = "";
  public c01r08custo: string = "";
  public c01r08shop: string = "";
  public c01r08obs: string = "";

  c01r09: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r09tipo: string = "";
  public c01r09data: string = "";
  public c01r09km: string = "";
  public c01r09custo: string = "";
  public c01r09shop: string = "";
  public c01r09obs: string = "";

  c01r10: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r10tipo: string = "";
  public c01r10data: string = "";
  public c01r10km: string = "";
  public c01r10custo: string = "";
  public c01r10shop: string = "";
  public c01r10obs: string = "";

  car01: Car = { placa: '', marca: '', modelo: '', ano: '', km: '' }
  public car01placa: string = "";
  public car01marca: string = "";
  public car01modelo: string = "";
  public car01ano: string = "";
  public car01km: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_03');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }
  setStorage() {
    let c01r01: Repair = {
      tipo: this.c01r01tipo,
      data: this.c01r01data,
      km: this.c01r01km,
      custo: this.c01r01custo,
      shop: this.c01r01shop,
      obs: this.c01r01obs,
    }

    this.storage.create("c01r01", JSON.stringify(c01r01));

    let c01r02: Repair = {
      tipo: this.c01r02tipo,
      data: this.c01r02data,
      km: this.c01r02km,
      custo: this.c01r02custo,
      shop: this.c01r02shop,
      obs: this.c01r02obs,
    }

    this.storage.create("c01r02", JSON.stringify(c01r02));

    let c01r03: Repair = {
      tipo: this.c01r03tipo,
      data: this.c01r03data,
      km: this.c01r03km,
      custo: this.c01r03custo,
      shop: this.c01r03shop,
      obs: this.c01r03obs,
    }

    this.storage.create("c01r03", JSON.stringify(c01r03));

    let c01r04: Repair = {
      tipo: this.c01r04tipo,
      data: this.c01r04data,
      km: this.c01r04km,
      custo: this.c01r04custo,
      shop: this.c01r04shop,
      obs: this.c01r04obs,
    }

    this.storage.create("c01r04", JSON.stringify(c01r04));

    let c01r05: Repair = {
      tipo: this.c01r05tipo,
      data: this.c01r05data,
      km: this.c01r05km,
      custo: this.c01r05custo,
      shop: this.c01r05shop,
      obs: this.c01r05obs,
    }

    this.storage.create("c01r05", JSON.stringify(c01r05));

    let c01r06: Repair = {
      tipo: this.c01r06tipo,
      data: this.c01r06data,
      km: this.c01r06km,
      custo: this.c01r06custo,
      shop: this.c01r06shop,
      obs: this.c01r06obs,
    }

    this.storage.create("c01r06", JSON.stringify(c01r06));

    let c01r07: Repair = {
      tipo: this.c01r07tipo,
      data: this.c01r07data,
      km: this.c01r07km,
      custo: this.c01r07custo,
      shop: this.c01r07shop,
      obs: this.c01r07obs,
    }

    this.storage.create("c01r07", JSON.stringify(c01r07));

    let c01r08: Repair = {
      tipo: this.c01r08tipo,
      data: this.c01r08data,
      km: this.c01r08km,
      custo: this.c01r08custo,
      shop: this.c01r08shop,
      obs: this.c01r08obs,
    }

    this.storage.create("c01r08", JSON.stringify(c01r08));

    let c01r09: Repair = {
      tipo: this.c01r09tipo,
      data: this.c01r09data,
      km: this.c01r09km,
      custo: this.c01r09custo,
      shop: this.c01r09shop,
      obs: this.c01r09obs,
    }

    this.storage.create("c01r09", JSON.stringify(c01r09));

    let c01r10: Repair = {
      tipo: this.c01r10tipo,
      data: this.c01r10data,
      km: this.c01r10km,
      custo: this.c01r10custo,
      shop: this.c01r10shop,
      obs: this.c01r10obs,
    }

    this.storage.create("c01r10", JSON.stringify(c01r10));


    let car01: Car = {
      placa: this.car01placa,
      marca: this.car01marca,
      modelo: this.car01modelo,
      ano: this.car01ano,
      km: this.car01km,
    }

    this.storage.create("car01", JSON.stringify(car01));
  }
  async getStorage() {
    await this.storage.read("c01r01").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r01 = p;
      }
      else
        this.c01r01 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("c01r02").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r02 = p;
      }
      else
        this.c01r02 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("c01r03").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r03 = p;
      }
      else
        this.c01r03 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("c01r04").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r04 = p;
      }
      else
        this.c01r04 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("c01r05").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r05 = p;
      }
      else
        this.c01r05 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("c01r06").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r06 = p;
      }
      else
        this.c01r06 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("c01r07").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r07 = p;
      }
      else
        this.c01r07 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("c01r08").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r08 = p;
      }
      else
        this.c01r08 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("c01r09").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r09 = p;
      }
      else
        this.c01r09 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("c01r10").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r10 = p;
      }
      else
        this.c01r10 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

    await this.storage.read("car01").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.car01 = p;
      }
      else
        this.car01 = { placa: '', marca: '', modelo: '', ano: '', km: '' };
    })
  }



  

}
