/* tslint:disable */

import {TypeEmissionDto} from "./type-emission-dto";
import {TitreMessageDto} from "./titre-message-dto";
import {TypeEnseignementDto} from "./type-enseignement-dto";
import {DonneeDto} from "./donnee-dto";

export interface EnseignementDto {
  id?: number;
  description?: string;
  donnee?: DonneeDto;
  typeEmission?: TypeEmissionDto;
  titreMessage?: TitreMessageDto;
  typeEnseignement?: TypeEnseignementDto;
}
