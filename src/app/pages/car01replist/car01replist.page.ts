import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-car01replist',
  templateUrl: './car01replist.page.html',
  styleUrls: ['./car01replist.page.scss'],
})
export class Car01replistPage implements OnInit, AfterViewInit {

  c01r01: Repair = { tipo: '', data: '', custo: '', shop: '', obs: '' }
  public c01r01tipo: string = "";
  public c01r01data: string = "";
  public c01r01custo: string = "";
  public c01r01shop: string = "";
  public c01r01obs: string = "";

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
      custo: this.c01r01custo,
      shop: this.c01r01shop,
      obs: this.c01r01obs,
    }

    this.storage.create("c01r01", JSON.stringify(c01r01));
  }
  async getStorage() {
    await this.storage.read("c01r01").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r01 = p;
      }
      else
        this.c01r01 = { tipo: '', data: '', custo: '', shop: '', obs: '' };
    })

  }

}
