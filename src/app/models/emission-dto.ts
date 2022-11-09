/* tslint:disable */

import {DonneeDto} from "./donneeDto";
import {TypeEmissionDto} from "./type-emission-dto";

export interface EmissionDto {
  intitule?: string;
  description?: string;
  dateEmission?: string;
  donnee?: DonneeDto;
  typeEmission?: TypeEmissionDto;
}
