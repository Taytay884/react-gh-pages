import React, { Component } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import axios from "axios";
import moment from "moment";

import "./BitcoinChart.css";

class BitcoinChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedData: []
    };
    this.getBitcoinData();
  }

  getBitcoinData() {
    axios
      .get("https://api.coindesk.com/v1/bpi/historical/close.json")
      .then(res => {
        let bitcoinData = res.data;
        let sortedData = [];
        for (let date in bitcoinData.bpi) {
          sortedData.push({
            date: moment(date).format("MMM DD"),
            localePrice: bitcoinData.bpi[date].toLocaleString(),
            price: bitcoinData.bpi[date]
          });
        }
        this.setState({ sortedData });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.sortedData.length)
      return <h1>Trying to get bitcoin data.</h1>;
    // console.log("state sortedData", this.state.sortedData);
    return (
      <div className="bitcoin-chart">
        <h2>Bitcoin rate this month</h2>
        <div className="chart">
          <AreaChart
            width={360}
            height={200}
            data={this.state.sortedData}
            syncId="anyId"
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#edf5e1" />
            <YAxis stroke="#edf5e1" />
            <Tooltip wrapperStyle={{ backgroundColor: "#c9c9c966" }} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#242582"
              fill="#5CDB95"
            />
          </AreaChart>
        </div>
      </div>
    );
  }
}

export default BitcoinChart;
