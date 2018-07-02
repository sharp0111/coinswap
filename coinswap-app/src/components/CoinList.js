import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

import coinlist from '../coinlist';

export default class CoinList extends Component {
  render() {
    return (
      <div className = 'coinlist'>
        <ul>
            {
                this.coinlist.map(coin => {
                    return (
                        <li><span>{coin.name}</span></li>
                    );
                });
            }
        </ul>
      </div>
    )
  }
}