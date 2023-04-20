/* tslint:disable */
import {CodePostaleDto} from "./code-postale-dto";
import {VilleDto} from "./ville-dto";
import {PaysDto} from "./pays-dto";

export interface AdresseDto {
  id?: number;
  adresse1?: string;
  adresse2?: string;
  ville?: VilleDto;
  codePostale?: CodePostaleDto;
  pays?: PaysDto;
}
