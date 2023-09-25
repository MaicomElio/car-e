import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-meusveiculos',
  templateUrl: './meusveiculos.page.html',
  styleUrls: ['./meusveiculos.page.scss'],
})
export class MeusveiculosPage implements OnInit, AfterViewInit {

  car01: Car = { placa: '', marca: '', modelo: '', ano: '', km: '' }
  public car01placa: string = "";
  public car01marca: string = "";
  public car01modelo: string = "";
  public car01ano: string = "";
  public car01km: string = "";

  constructor(private storage: StorageService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {

    const button = document.getElementById('BT_04');

    if (button) {
      button.click();
    } else {
      console.error("Botão não encontrado");
    }
  }
  setStorage() {
    let car01: Car = {
      placa: this.car01placa,
      marca: this.car01marca,
      modelo: this.car01modelo,
      ano: this.car01ano,
      km: this.car01km,
    }

    this.storage.create("car01", JSON.stringify(car01));
  }
  async getStorage() {
    await this.storage.read("car01").then((data: any) => {
      if (data.value) {
        let p = JSON.parse(data.value);
        this.car01 = p;
      }
      else
        this.car01 = { placa: '', marca: '', modelo: '', ano: '', km: '' };
    })
  }
}