export class Patient {
  id: number;
  lastname: string;
  firstname: string;
  middlename: string;
  iin: string;

  constructor(id: number, lastname: string, firstname: string, middlename: string, iin: string) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.middlename = middlename;
    this.iin = iin;
  }
}
