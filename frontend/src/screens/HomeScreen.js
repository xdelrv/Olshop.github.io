import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'


const HomeScreen = () => {
    return (
        <>
        <h5>Lates Product</h5>
        <Row>
            {products.map(product => (
                <Col xs={6}  md={4} lg={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>

        </>

    )
}

export default HomeScreen
