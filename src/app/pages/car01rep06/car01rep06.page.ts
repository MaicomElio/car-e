import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Repair } from 'src/app/interfaces/repair';
import { StorageService } from 'src/app/services/storage.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car01rep06',
  templateUrl: './car01rep06.page.html',
  styleUrls: ['./car01rep06.page.scss'],
})
export class Car01rep06 implements OnInit, AfterViewInit {

  c01r06: Repair = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' }
  public c01r06tipo: string = "";
  public c01r06data: string = "";
  public c01r06km: string = "";
  public c01r06custo: string = "";
  public c01r06shop: string = "";
  public c01r06obs: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_16');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }

  setStorage() {
    let c01r06: Repair = {
      tipo: this.c01r06tipo,
      data: this.c01r06data,
      km: this.c01r06km,
      custo: this.c01r06custo,
      shop: this.c01r06shop,
      obs: this.c01r06obs,
    }

    this.storage.create("c01r06", JSON.stringify(c01r06));
  }
  async getStorage() {
    await this.storage.read("c01r06").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.c01r06 = p;
      }
      else
        this.c01r06 = { tipo: '', data: '', km: '', custo: '', shop: '', obs: '' };
    })

  }
}
