export interface Data {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: any;
  area: number;
  callingCodes: any;
  capital: string;
  currencies: any;
  demonym: string;
  flag: string;
  flags: { svg: string; png: string };
  independent: boolean;
  languages: any;
  latlng: any;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: any;
  subregion: string;
  timezones: any;
  topLevelDomain: any;
  translations: any;
}

export type ResopnseData = Data[];
