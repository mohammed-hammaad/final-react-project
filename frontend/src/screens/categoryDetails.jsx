import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Product from '../components/Product';

const CategoryDetails = () => {
  const { categoryName } = useParams();
  const [productcategory, setproductcategory] = useState();

  useEffect(() => {
    let categoryDetails = axios
      .get(`http://localhost:4000/getMedicineByCategory/${categoryName}`)

      .then((data) => {
        setproductcategory(data.data);
        console.log(data.data.allCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);
  return (
    <Row>
      {productcategory?.map((category) => (
        <Col key={category._id} sm={12} md={6} lg={4} xl={3}>
          {/* <Product product={category} /> */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>MedicineByCategory</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CategoryDetails;
