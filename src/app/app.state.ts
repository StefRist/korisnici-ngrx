import { Korisnik } from './models/korisnik.model';

export interface AppState {
  readonly korisnik: Korisnik[];
}
