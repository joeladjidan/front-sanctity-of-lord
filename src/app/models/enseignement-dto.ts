/* tslint:disable */

import {DonneeDto} from "./donneeDto";
import {TypeEmissionDto} from "./type-emission-dto";
import {TitreMessageDto} from "./titre-message-dto";
import {TypeEnseignementDto} from "./type-enseignement-dto";

export interface EnseignementDto {
  description?: string;
  donnee?: DonneeDto;
  typeEmission?: TypeEmissionDto;
  titreMessage?: TitreMessageDto;
  typeEnseignement?: TypeEnseignementDto;
}
