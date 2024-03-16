import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';

const MedicineDetails = () => {
  const { Medicinedetails } = useParams();
  const [data, setdata] = useState();
  useEffect(() => {
    let medicines = axios
      .get(`http://localhost:4000/getMedicineByName/${Medicinedetails}`)

      .then((data) => {
        setdata(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Row>
      {/* {data.allMedicines?.map((medicine) => (
        <Col key={medicine._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={medicine} />
        </Col>
      ))} */}
      <h1> Deatailes</h1>
    </Row>
  );
};

export default MedicineDetails;
