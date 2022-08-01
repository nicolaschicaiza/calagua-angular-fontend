export class Sensor {
  _id?: number;
  timearrive: Date;
  CONDUCTIVITY: number;
  PH: number;
  TEMPERATURE: number;
  TSS: number;
  station: String;

  constructor(timearrive: Date, CONDUCTIVITY: number, PH: number, TEMPERATURE: number, TSS: number, station: String) {
    this.timearrive = timearrive;
    this.CONDUCTIVITY = CONDUCTIVITY;
    this.PH = PH;
    this.TEMPERATURE = TEMPERATURE;
    this.TSS = TSS;
    this.station = station;
  }

}
