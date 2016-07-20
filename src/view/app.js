import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { restaurantDetailsActions } from '../core/restaurant-details';

export class App extends Component {
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
                    <th>Restaurant Name</th>
                    <th>Yelp Rating</th>
                    <th>Yelp Review Count</th>
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
                        <td><a href={i.url}>Link</a></td>
                    </tr>
                )
            }
            </tbody>
            </table>
            </div>
        );
    }
}

App.propTypes = {
    loadRestaurantDetails: PropTypes.func.isRequired,
    restaurantDetails: PropTypes.array.isRequired
};

export default connect(state => ({
    restaurantDetails: state.restaurantDetails.details
}), restaurantDetailsActions)(App);