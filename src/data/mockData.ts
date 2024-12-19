export const shipmentData = [
  { month: "Jan", value: 4000, forecast: 3800 },
  { month: "Feb", value: 3000, forecast: 3200 },
  { month: "Mar", value: 2000, forecast: 2100 },
  { month: "Apr", value: 2780, forecast: 2600 },
];

export const exchangeRates = [
  { date: "01/04", EUR: 1, USD: 1.08, GBP: 0.85, CNY: 7.82 },
  { date: "02/04", EUR: 1, USD: 1.09, GBP: 0.86, CNY: 7.83 },
  { date: "03/04", EUR: 1, USD: 1.07, GBP: 0.84, CNY: 7.81 },
  { date: "04/04", EUR: 1, USD: 1.08, GBP: 0.85, CNY: 7.84 },
];

export const customsDocuments = [
  { id: "DOC001", type: "EUR.1", status: "Valide", expiration: "2024-12-31" },
  {
    id: "DOC002",
    type: "Certificat d'origine",
    status: "À renouveler",
    expiration: "2024-06-15",
  },
  {
    id: "DOC003",
    type: "Licence d'importation",
    status: "En cours",
    expiration: "2024-09-30",
  },
];

export const messages = [
  {
    id: 1,
    from: "Fournisseur Shanghai",
    content: "Commande XYZ prête pour expédition",
    time: "10:30",
    lang: "CN",
  },
  {
    id: 2,
    from: "Client Hamburg",
    content: "Confirmation de réception lot AB123",
    time: "11:45",
    lang: "DE",
  },
];

export const transportData = [
  { name: "Train", value: 100 },
  { name: "Bateau", value: 150 },
  { name: "Avion", value: 200 },
];
