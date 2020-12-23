
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Korisnik } from './../models/korisnik.model';
import { AppState } from './../app.state';
import * as KorisnikActions from './../store/korisnik.actions';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  public imeInput: string = '';
  prezimeInput: string = '';
  brojInput: string = '';

  ngOnInit(): void {
  }

  constructor(private store: Store<AppState>) {}

  addKorisnik(ime: any, prezime: any, broj: any) {
    this.store.dispatch(new KorisnikActions.AddKorisnik({ime: ime, prezime: prezime, broj: broj,show: false}) );
    this.imeInput = '';
    this.prezimeInput = '';
    this.brojInput = '';

  }

}
