import { Korisnik } from './../models/korisnik.model';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';


export const ADD_KORISNIK = '[KORISNIK] Add';
export const REMOVE_KORISNIK = '[KORISNIK] Remove';

export class AddKorisnik implements Action {

  readonly type = ADD_KORISNIK;

  constructor( public payload: Korisnik ){}

}

export class RemoveKorisnik implements Action {

  readonly type = REMOVE_KORISNIK;

  constructor( public payload: number ){}

}

export type Actions = AddKorisnik | RemoveKorisnik
