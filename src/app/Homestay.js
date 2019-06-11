import React from 'react'
import axios from 'axios'
import GoogleMapReact from 'google-map-react'

import HomestayList from './HomestayList'
import './homestay.css'


class Homestay extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            homestays: []
        }
    }

    componentDidMount() {
        this.getHomestays()
    }

    getHomestays = () => {
        const URL = 'https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json'

        axios.get(URL)
            .then((response) => {
                this.setState({ homestays: response.data })
            }, [])
    }
    
    render() {
        const center = {
            lat: -7.797068,
            lng: 110.371754
        }

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-7'>
                        <div className='homestay-app'>
                            <HomestayList 
                                dataState={this.state}
                            />
                        </div>
                    </div>

                    <div className='col-sm-5'>
                        <div className='homestay-map'>
                            <GoogleMapReact center={center} zoom={15}></GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homestay