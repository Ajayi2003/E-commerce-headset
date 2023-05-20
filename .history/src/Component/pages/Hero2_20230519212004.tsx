import React, { useState } from 'react'
import styled from "styled-components"
import pics from "../assets/pics2.png"




const Hero2 = () => {

// 


  return (
    <div>
      
      <Container>
        <Main>

          <Mega>
            <MegaHeadset src={pics}/>
            <TexHolder>
              <Text>New Collection</Text>
              <Text1>Strix Mega 1 </Text1>
              <Button><span>Shop Now</span></Button>
            </TexHolder>

          </Mega>

          <BikeHolder>

          </BikeHolder>

          <EBike>

          </EBike>

        </Main>
      </Container>

    </div>
  )
}

export default Hero2
const Button = styled.div`
width: 120px;
height: 40px;
background-color:black;
display: flex;
align-items:center;
justify-content: center;

span{
  color: white;
}

:hover{
  scale: 1.09;
}
`
const Text1 = styled.div``
const Text = styled.div``
const TexHolder = styled.div``
const MegaHeadset = styled.img`
object-fit: cover;
`
const EBike = styled.div``
const BikeHolder = styled.div``
const Mega = styled.div`
width: 30%;
height: 100%;
background-color: #ABEBC6;
`
const Main = styled.div`
width:95%;
height: 100%;
`
const Container = styled.div`
width:100%;
height: 350px;
background-color: gray;
display: flex;
justify-content: center;
align-items: center;
`
