import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car01rep07',
  templateUrl: './car01rep07.page.html',
  styleUrls: ['./car01rep07.page.scss'],
})
export class Car01rep07 implements OnInit, AfterViewInit {

  c01r07: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r07tipo: string = "";
  public c01r07data: string = "";
  public c01r07km: string = "";
  public c01r07custo: string = "";
  public c01r07shop: string = "";
  public c01r07obs: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_17');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }

  setStorage() {
    let c01r07: Repair = {
      tipo: this.c01r07tipo,
      data: this.c01r07data,
      km: this.c01r07km,
      custo: this.c01r07custo,
      shop: this.c01r07shop,
      obs: this.c01r07obs,
    }

    this.storage.create("c01r07", JSON.stringify(c01r07));
  }
  async getStorage() {
    await this.storage.read("c01r07").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r07 = p;
      }
      else
        this.c01r07 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

  }
}
