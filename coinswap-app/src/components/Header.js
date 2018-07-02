import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className = 'header'>
            <div className = 'nav_bar'>
                <nav className = 'nav_container'>
                    <ul>
                        <li>About</li>
                        <li>Support</li>
                        <li>Coin</li>
                        <li>Language</li>
                    </ul>
                </nav>
            </div>
            <div className = 'title_block'>
                <div className = 'img_container'>
                    <img src={require('../Assets/title.png')} alt= "coinswap logo" />
                </div>
            </div>
        </div>
    )
  }
}
