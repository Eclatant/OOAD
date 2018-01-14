export interface IInstrumentSpec {
  [key: string]: string | number;
}

export enum InstrumentType {
  GUITAR = "Guitar",
  BANJO = "Banjo",
  DOBRO = "Dobro",
  FIDDLE = "Fiddle",
  BASS = "Bass",
  MANDOLIN = "Mandolin"
}

export enum Builder {
  FENDER = "Fender",
  MARTIN = "Martin",
  GIBSON = "Gibson",
  COLLINGS = "Collings",
  OLSON = "Olson",
  RYAN = "Ryan",
  PRS = "PRS"
}

export enum Type {
  ACOUSTIC = "acoustic",
  ELECTRIC = "electric"
}

export enum Wood {
  INDIAN_ROSEWOOD = "Indian Rosewood",
  BRAZILIAN_ROSEWOOD = "Brazilian Rosewood",
  MAHOGANY = "Mahogany",
  MAPLE = "Maple",
  COCOBOLO = "Cocobolo",
  CEDAR = "Cedar",
  ADIRONDACK = "Adirondack",
  ALDER = "Alder",
  SITKA = "Sitka"
}

export enum Style {
  A = "A style",
  F = "F style"
}
