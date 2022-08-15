/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Carousel from '../components/Carousel';
import CardItem from '../components/MDB_Cards';
import CardItem_2 from '../components/MDB_Cards_2';
// import image from 'images/h-images/AI_Connect.png';
// import image1 from 'images/h-images/AI-1.jpg';
// import image2 from 'images/h-images/AI-2.jpg';
// import image3 from 'images/h-images/AI-3.jpg';
function AI_Connect() {
  return (
      <>
      <div style={{padding :50}}>
        <h1> Hi, this is AI Connect </h1>
      <MDBRow style={{}}>
      <MDBCol sm='8'>  <Carousel /></MDBCol>
      <MDBCol sm='4'><img style={{height: 415, width: 415}} src="images/h-images/AI_Connect.png" alt="" /></MDBCol>
    </MDBRow>
      <MDBRow style={{padding :50}}>

        <MDBCol sm='3'><CardItem_2
        src="images/img-1.jpg"
        title="Learning content from more than 1000 companies in the form of challenges."
        content="Learn"
        /> </MDBCol>
        <MDBCol sm='3'><CardItem_2
          src="images/h-images/AI-1.jpg"
          title="Learning content from more than 1000 companies in the form of challenges."
          content="Learn"
        /> </MDBCol>
        <MDBCol sm='3'><CardItem_2
        src="images/h-images/AI-2.jpg"
        title="Learning content from more than 1000 companies in the form of challenges."
        content="Learn"
        /> </MDBCol>
        <MDBCol sm='3'><CardItem_2
        src="images/h-images/AI-3.jpg"
        title="Learning content from more than 1000 companies in the form of challenges."
        content="Learn"
        /> </MDBCol>
      </MDBRow>
      </div>
      </>
  );
}

export default AI_Connect;