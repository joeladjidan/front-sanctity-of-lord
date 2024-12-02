/* tslint:disable */

import {TypeEmissionDto} from "./type-emission-dto";
import {DonneeDto} from "./donnee-dto";

export interface EmissionDto {
  id?: number;
  description?: string;
  dateEmission?: Date;
  donnee?: DonneeDto;
  typeEmission?: TypeEmissionDto;
}
