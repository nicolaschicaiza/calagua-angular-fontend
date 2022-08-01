export class Estacion {
  _id?: number;
  name: String;
  location: String;
  status: Boolean;

  constructor(name: String, location: String, status: Boolean) {
    this.name = name;
    this.location = location;
    this.status = status;
  }

}
