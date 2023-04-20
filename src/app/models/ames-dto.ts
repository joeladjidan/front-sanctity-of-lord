/* tslint:disable */
import { CiviliteDto } from './civilite-dto';
import {CodePostaleDto} from "./code-postale-dto";
import {VilleDto} from "./ville-dto";
import {PaysDto} from "./pays-dto";

export interface AmesDto {
  id?: number;
  nom?: string;
  prenom?: string;
  photo?: string;
  email?: string;
  sujet?: string;
  telephone?: string;
  localisation?: string;
  ville?: VilleDto;
  pays?: PaysDto;
  codePostale?: CodePostaleDto;
  civilite?: CiviliteDto;
}
