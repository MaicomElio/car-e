import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car01rep04',
  templateUrl: './car01rep04.page.html',
  styleUrls: ['./car01rep04.page.scss'],
})
export class Car01rep04 implements OnInit, AfterViewInit {

  c01r04: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r04tipo: string = "";
  public c01r04data: string = "";
  public c01r04km: string = "";
  public c01r04custo: string = "";
  public c01r04shop: string = "";
  public c01r04obs: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_14');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }

  setStorage() {
    let c01r04: Repair = {
      tipo: this.c01r04tipo,
      data: this.c01r04data,
      km: this.c01r04km,
      custo: this.c01r04custo,
      shop: this.c01r04shop,
      obs: this.c01r04obs,
    }

    this.storage.create("c01r04", JSON.stringify(c01r04));
  }
  async getStorage() {
    await this.storage.read("c01r04").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r04 = p;
      }
      else
        this.c01r04 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

  }
}
