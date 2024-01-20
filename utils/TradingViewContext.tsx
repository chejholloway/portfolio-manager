// utils/TradingViewContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const TradingViewContext = createContext(null);

export const TradingViewProvider: React.FC = ({ children }) => {
  const [SymbolOverviewNoSSR, setSymbolOverviewNoSSR] = useState(null);

  useEffect(() => {
    // Perform the dynamic import on the client side
    import("react-ts-tradingview-widgets")
      .then((w) => setSymbolOverviewNoSSR(w.SymbolOverview))
      .catch((error) => console.error("Error importing SymbolOverview:", error));
  }, []);

  return (
    <TradingViewContext.Provider value={{ SymbolOverviewNoSSR }}>
      {children}
    </TradingViewContext.Provider>
  );
};

export const useTradingView = () => {
  return useContext(TradingViewContext);
};
