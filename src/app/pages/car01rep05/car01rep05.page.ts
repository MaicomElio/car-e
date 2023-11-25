import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car01rep05',
  templateUrl: './car01rep05.page.html',
  styleUrls: ['./car01rep05.page.scss'],
})
export class Car01rep05 implements OnInit, AfterViewInit {

  c01r05: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r05tipo: string = "";
  public c01r05data: string = "";
  public c01r05km: string = "";
  public c01r05custo: string = "";
  public c01r05shop: string = "";
  public c01r05obs: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_15');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }

  setStorage() {
    let c01r05: Repair = {
      tipo: this.c01r05tipo,
      data: this.c01r05data,
      km: this.c01r05km,
      custo: this.c01r05custo,
      shop: this.c01r05shop,
      obs: this.c01r05obs,
    }

    this.storage.create("c01r05", JSON.stringify(c01r05));
  }
  async getStorage() {
    await this.storage.read("c01r05").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r05 = p;
      }
      else
        this.c01r05 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

  }
}
