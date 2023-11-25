import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car01rep09',
  templateUrl: './car01rep09.page.html',
  styleUrls: ['./car01rep09.page.scss'],
})
export class Car01rep09 implements OnInit, AfterViewInit {

  c01r09: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r09tipo: string = "";
  public c01r09data: string = "";
  public c01r09km: string = "";
  public c01r09custo: string = "";
  public c01r09shop: string = "";
  public c01r09obs: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_19');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }

  setStorage() {
    let c01r09: Repair = {
      tipo: this.c01r09tipo,
      data: this.c01r09data,
      km: this.c01r09km,
      custo: this.c01r09custo,
      shop: this.c01r09shop,
      obs: this.c01r09obs,
    }

    this.storage.create("c01r09", JSON.stringify(c01r09));
  }
  async getStorage() {
    await this.storage.read("c01r09").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r09 = p;
      }
      else
        this.c01r09 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

  }
}
