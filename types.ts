export interface NavItem {
  label: string;
  href: string;
}

export interface CandleData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export enum OrderSide {
  LONG = 'Long',
  SHORT = 'Short'
}
