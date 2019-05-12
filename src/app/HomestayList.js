import React from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'


class HomestayList extends React.Component {

    render() {
        const { homestays } = this.props.dataState

        return (
            <div className='homestay-list'>
                <Row>
                    {
                        homestays.map((homestay, i) =>
                            <Col xs='6' key={i}>
                                <Card className='homestay-card'>
                                    <CardBody>
                                        <img className='homestay-img' src={homestay.fotoUrl} alt='' />
                                        <p className='homestay-name'><b>{homestay.nama} - Rp. {homestay.harga}</b></p>
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