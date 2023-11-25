import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car01rep03',
  templateUrl: './car01rep03.page.html',
  styleUrls: ['./car01rep03.page.scss'],
})
export class Car01rep03 implements OnInit, AfterViewInit {

  c01r03: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r03tipo: string = "";
  public c01r03data: string = "";
  public c01r03km: string = "";
  public c01r03custo: string = "";
  public c01r03shop: string = "";
  public c01r03obs: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_13');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }

  setStorage() {
    let c01r03: Repair = {
      tipo: this.c01r03tipo,
      data: this.c01r03data,
      km: this.c01r03km,
      custo: this.c01r03custo,
      shop: this.c01r03shop,
      obs: this.c01r03obs,
    }

    this.storage.create("c01r03", JSON.stringify(c01r03));
  }
  async getStorage() {
    await this.storage.read("c01r03").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r03 = p;
      }
      else
        this.c01r03 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

  }
}
