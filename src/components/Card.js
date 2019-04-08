import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="weather-card">
                <div className="weather-card-section">
                    <h1>Time</h1>
                </div>
                <div className="weather-card-section">
                    <h1>Icon</h1>
                </div>
                <div className="weather-card-section">
                    <h1>Info</h1>
                </div>
            </div>
        );
    }
}

export default Card;