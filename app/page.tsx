"use client"
import ECommerce from "@/components/Dashboard/E-commerce";
import { TradingViewProvider } from "../utils/TradingViewContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCG Dashboard | NextJS, Tailwinds",
  description: "Demo page for SCG ASSET MANAGEMENT"
};

export default function Home() {
  return (
    <TradingViewProvider>
      <ECommerce />
    </TradingViewProvider>
  );
}
