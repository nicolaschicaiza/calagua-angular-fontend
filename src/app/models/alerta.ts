export class Alerta {
  _id?: number;
  name: String;
  station: String;
  sensor: String;
  umbral: number;
  validation: Boolean;
  observation: String;

  constructor(name: String, station: String, sensor: String, umbral: number, validation: Boolean, observation: String) {
    this.name = name;
    this.station = station;
    this.sensor = sensor;
    this.umbral = umbral;
    this.validation = validation;
    this.observation = observation;
  }
}
