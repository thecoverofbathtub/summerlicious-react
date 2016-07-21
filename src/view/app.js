import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { restaurantDetailsActions } from '../core/restaurant-details';

export class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.isPropertyDescending = {};
        this.sortDetailsByProperty = this.sortDetailsByProperty.bind(this);
    }

    componentWillMount() {
        this.props.loadRestaurantDetails();
    }

    render() {
        const { restaurantDetails } = this.props;
        return (
            <div>
            <table>
            <thead>
                <tr>
                    <th><a href="#" onClick={this.sortDetailsByProperty('name')}>
                        Restaurant Name
                    </a></th>
                    <th><a href="#" onClick={this.sortDetailsByProperty('stars')}>
                        Yelp Rating
                    </a></th>
                    <th><a href="#" onClick={this.sortDetailsByProperty('count')}>
                        Yelp Review Count
                    </a></th>
                    <th>Yelp Link</th>
                </tr>
            </thead>
            <tbody>
            {
                restaurantDetails.map(i =>
                    <tr key={i.name}>
                        <td>{i.name}</td>
                        <td>{i.stars}</td>
                        <td>{i.count}</td>
                        <td><a href={i.url} target="_blank">Link</a></td>
                    </tr>
                )
            }
            </tbody>
            </table>
            </div>
        );
    }

    sortDetailsByProperty(property) {
        const { isPropertyDescending } = this;
        const { restaurantDetails } = this.props;
        isPropertyDescending[property] = !isPropertyDescending[property];
        return () => {
            restaurantDetails.sort((a, b) => {
                let pa = a[property], pb = b[property];
                return (isPropertyDescending[property] ? -1 : 1) * (pa === pb ? 0 : (pa < pb ? -1 : 1));
            });
        };
    }
}

App.propTypes = {
    loadRestaurantDetails: PropTypes.func.isRequired,
    restaurantDetails: PropTypes.array.isRequired
};

export default connect(state => ({
    restaurantDetails: state.restaurantDetails.details
}), restaurantDetailsActions)(App);