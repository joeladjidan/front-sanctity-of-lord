/* tslint:disable */

import {EnseignementDto} from "./enseignement-dto";
import {EmissionDto} from "./emission-dto";

export interface ArchivreDto {
  dateArchivre?: Date;
  enseignementDto?: EnseignementDto;
  emissionDto: EmissionDto;
}
