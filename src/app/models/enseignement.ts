/* tslint:disable */
import {DonneeDto} from "./donneeDto";
import {TypeEmissionDto} from "./type-emission-dto";
import {TitreMessageDto} from "./titre-message-dto";
import {TypeEnseignementDto} from "./type-enseignement-dto";

export interface Enseignement {
  description?: string;
  donneeDto: DonneeDto;
  typeEmissionDto: TypeEmissionDto;
  titreMessageDto: TitreMessageDto;
  typeEnseignementDto: TypeEnseignementDto;
}
