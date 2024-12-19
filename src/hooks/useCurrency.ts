import { useState, useCallback } from "react";

export const useCurrency = (initialCurrency = "EUR") => {
  const [currency, setCurrency] = useState(initialCurrency);

  const formatCurrency = useCallback(
    (value: number) => {
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: currency,
      }).format(value);
    },
    [currency]
  );

  return { currency, setCurrency, formatCurrency };
};
