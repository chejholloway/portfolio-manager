"use client"

import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dynamic from "next/dynamic";

import Header from "@/components/Header/";
import CommoditiesGrid from "@/components/CommoditiesGrid";
import BollingerBandsChart from "@/components/Charts/BollingerBandsChart";
import StockChart from "@/components/Charts/StockChart";
import TreeMapChart from "@/components/Charts/TreeMapChart";
import BoxPlotChart from "@/components/Charts/BoxPlotChart";
import StockTicker from "../Ticker/StockTicker";
import NewsFeed from "../NewsFeed/NewsFeed";

import './styles.css';

const MarketOverviewComponent = dynamic(() => import("@/components/MarketOverview.tsx"), {
  ssr: false,
});

const Dashboard: React.FC = () => {

  return (
    <>
    <Header />
    <StockTicker />
    <div className="dashboard">

      <div className="row">
        <div className="col col-1">
          <BoxPlotChart />
        </div>
        <div className="col col-2">
          <StockChart />
        </div>
      </div>
      <div className="row">
        <div className="col col-1">
          <NewsFeed />
        </div>
        <div className="col col-2">
          <MarketOverviewComponent />
        </div>
        <div className="col col-3">
          <TreeMapChart />
        </div>
      </div>
      <div className="row">
        <div className="col col-1">
          <CommoditiesGrid />
        </div>
        <div className="col col-2">
          <BollingerBandsChart />
        </div>
      </div>
    </div>
  </>
  );
};

export default Dashboard;
