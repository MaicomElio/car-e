import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car01rep02',
  templateUrl: './car01rep02.page.html',
  styleUrls: ['./car01rep02.page.scss'],
})
export class Car01rep02 implements OnInit, AfterViewInit {

  c01r02: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r02tipo: string = "";
  public c01r02data: string = "";
  public c01r02km: string = "";
  public c01r02custo: string = "";
  public c01r02shop: string = "";
  public c01r02obs: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_12');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }

  setStorage() {
    let c01r02: Repair = {
      tipo: this.c01r02tipo,
      data: this.c01r02data,
      km: this.c01r02km,
      custo: this.c01r02custo,
      shop: this.c01r02shop,
      obs: this.c01r02obs,
    }

    this.storage.create("c01r02", JSON.stringify(c01r02));
  }
  async getStorage() {
    await this.storage.read("c01r02").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r02 = p;
      }
      else
        this.c01r02 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

  }
}
