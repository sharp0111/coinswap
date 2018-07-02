import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ExchangeBox extends Component {
  render() {
    return (
      <div className = 'exchange_container_center'>
        <div className = 'exchange_container'>
          <div className = 'exchange_top'>
            <div className = 'span_container'>
              <span>Deposit</span>
              <span>Receive</span>
            </div>
          </div>
          <div className = 'exchange_bottom'>
              
              <div className ='deposit_box'>
              {/* <FontAwesomeIcon icon="fab fa-amazon-pay" /> */}
              <p>btc</p>
              </div>
              
              <div className = 'transaction_info'>
              <p className = 'transaction_rate'> 1 BTC = 13.87666736 ETH</p>
              <img src={require('../Assets/Arrow.png')} alt= "arrow left to right" />
              <p className = 'transaction_fee'> Miner Fee 0.01 ETH</p>
              </div>

              <div className ='receive_box'>
              <p>eth</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
