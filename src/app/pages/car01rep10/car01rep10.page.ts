import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car01rep10',
  templateUrl: './car01rep10.page.html',
  styleUrls: ['./car01rep10.page.scss'],
})
export class Car01rep10 implements OnInit, AfterViewInit {

  c01r10: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r10tipo: string = "";
  public c01r10data: string = "";
  public c01r10km: string = "";
  public c01r10custo: string = "";
  public c01r10shop: string = "";
  public c01r10obs: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_20');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }

  setStorage() {
    let c01r10: Repair = {
      tipo: this.c01r10tipo,
      data: this.c01r10data,
      km: this.c01r10km,
      custo: this.c01r10custo,
      shop: this.c01r10shop,
      obs: this.c01r10obs,
    }

    this.storage.create("c01r10", JSON.stringify(c01r10));
  }
  async getStorage() {
    await this.storage.read("c01r02").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r10 = p;
      }
      else
        this.c01r10 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

  }
}
