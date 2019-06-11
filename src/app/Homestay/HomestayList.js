import React from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'
import './homestay.css'


class HomestayList extends React.Component {

    handleClick = () => {
        this.props.selectHomestay(this.props.homestay)
    }

    render() {
        const { homestays } = this.props.dataState

        return (
            <div className='homestay-list'>
                <Row>
                    {
                        homestays.map((homestay, i) =>
                            <Col xs='6' key={i}>
                                <Card className='homestay-card'>
                                    <CardBody onClick={this.handleClick}>
                                        <img className='homestay-img' src={homestay.fotoUrl} alt='' />
                                        <p className='homestay-name'><b>{homestay.nama} - Rp. {homestay.harga} K</b></p>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        )
    }
}

export default HomestayList