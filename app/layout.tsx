"use client";

import { useState, useEffect } from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import Loader from "@/components/common/Loader";
import "./globals.css";
import "./theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    document.title = "SCG DashBoard Updated";
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
          <main>
            {children}
          </main>
          )}
      </body>
    </html>
  );
}
