import { async } from '@angular/core/testing';
import { Component, OnInit} from '@angular/core';
import { AppState } from './../app.state';
import { Korisnik } from './../models/korisnik.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as KorisnikActions from './../store/korisnik.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public korisnici: Observable<Korisnik[]>;


  constructor(public store: Store<AppState>) {
      this.korisnici = store.select('korisnik');
    }

  public delKorisnik(index: number)
  {
    this.store.dispatch(new KorisnikActions.RemoveKorisnik(index));
  }

  ngOnInit(): void {
  }

}
