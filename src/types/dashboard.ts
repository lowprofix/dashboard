export interface ShipmentData {
  month: string;
  value: number;
  forecast: number;
}

export interface ExchangeRate {
  date: string;
  EUR: number;
  USD: number;
  GBP: number;
  CNY: number;
}

export interface CustomsDocument {
  id: string;
  type: string;
  status: string;
  expiration: string;
}

export interface Message {
  id: number;
  from: string;
  content: string;
  time: string;
  lang: string;
}
