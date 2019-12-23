
import React, {useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import HomeScore from './components/HomeScore';
import AwayScore from './components/AwayScore';
import TopRow from './components/TopRow';
import QuarterButton from './components/QuarterButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
