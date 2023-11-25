import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car01rep08',
  templateUrl: './car01rep08.page.html',
  styleUrls: ['./car01rep08.page.scss'],
})
export class Car01rep08 implements OnInit, AfterViewInit {

  c01r08: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r08tipo: string = "";
  public c01r08data: string = "";
  public c01r08km: string = "";
  public c01r08custo: string = "";
  public c01r08shop: string = "";
  public c01r08obs: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_18');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }

  setStorage() {
    let c01r08: Repair = {
      tipo: this.c01r08tipo,
      data: this.c01r08data,
      km: this.c01r08km,
      custo: this.c01r08custo,
      shop: this.c01r08shop,
      obs: this.c01r08obs,
    }

    this.storage.create("c01r08", JSON.stringify(c01r08));
  }
  async getStorage() {
    await this.storage.read("c01r08").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r08 = p;
      }
      else
        this.c01r08 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

  }
}
