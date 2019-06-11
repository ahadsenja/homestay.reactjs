import React from 'react'
import axios from 'axios'
import GoogleMapReact from 'google-map-react'

import HomestayList from './HomestayList'
import Marker from '../../components/Marker'
import './homestay.css'


class Homestay extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            homestays: [],
            selectedHomestay: null,
            allHomestays: [],
            search: ''
        }
    }

    componentDidMount() {
        this.getHomestays()
    }

    selectHomestay = (homestay) => {
        this.setState({
            selectedHomestay: homestay
        })
    }

    handleSearch = (e) => {
        this.setState({
            search: e.target.value,
            homestays: this.state.allHomestays.filter((homestay) =>
                new RegExp(e.target.value, 'i').exec(homestay.nama)
            )
        })
    }

    getHomestays = () => {
        const URL = 'https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json'

        axios.get(URL)
            .then((response) => {
                this.setState({ 
                    homestays: response.data,
                    allHomestays: response.data
                })
            }, [])
    }
    
    render() {
        // set area coordinates (yogyakarta)
        let center = {
            lat: -7.797068,
            lng: 110.371754
        }

        if (this.state.selectedHomestay) {
            center = {
                lat: this.state.selectedHomestay.lat,
                lng: this.state.selectedHomestay.lng
            }
        }

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-7'>
                        <br />
                        <div className='search'>
                            <input type='text' className='form-control' placeholder
                            ='Search ...' value={this.state.search} onChange={this.handleSearch} />
                        </div>
                        
                        <div className='homestay-app'>
                            <HomestayList 
                                dataState={this.state}
                                selectHomestay={this.selectHomestay}
                            />
                        </div>
                    </div>

                    <div className='col-sm-5'>
                        <div className='homestay-map'>
                            <GoogleMapReact center={center} zoom={15}>
                                {this.state.homestays.map((homestay) =>
                                    <Marker 
                                        key={homestay.id}
                                        lat={homestay.lat}    
                                        lng={homestay.lng}    
                                        text={homestay.harga}
                                        selected={homestay === this.state.selectedHomestay} 
                                    />
                                )}
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homestay