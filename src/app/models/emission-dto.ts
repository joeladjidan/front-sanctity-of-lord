/* tslint:disable */

import {TypeEmissionDto} from "./type-emission-dto";
import {DonneeDto} from "./donnee-dto";

export interface EmissionDto {
  id?: number;
  intitule?: string;
  description?: string;
  dateEmission?: string;
  donnee?: DonneeDto;
  typeEmission?: TypeEmissionDto;
}
