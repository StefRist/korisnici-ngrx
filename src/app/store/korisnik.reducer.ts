import { Korisnik } from './../models/korisnik.model';
import { Action } from '@ngrx/store';
import * as KorisnikActions from './../store/korisnik.actions';


const initialState: Korisnik = {
  ime: 'Stefan',
  prezime: 'Ristic',
  broj: '+381 65 581 623',
  show: false
}

export function reducer(state: Korisnik[] = [initialState], action: KorisnikActions.Actions) {

  switch(action.type) {
      case KorisnikActions.ADD_KORISNIK:
          return [...state, action.payload];
      case KorisnikActions.REMOVE_KORISNIK:
          const newState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
          return newState;

      default:
          return state;
  }
}
