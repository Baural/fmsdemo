import {Patient} from './Patient';
import {Clinic} from './Clinic';

export class Registry {
  id: number;
  publicationDate: Date;
  deadDate?: Date;
  patient: Patient;
  clinic: Clinic;}
