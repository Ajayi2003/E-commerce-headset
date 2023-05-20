import React, { useState } from 'react'
import styled from "styled-components"




const Hero2 = () => {

// 


  return (
    <div>
      
      <Container>
        <Main>

          <Mega>
            <MegaHeadset/>
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
const Button = styled.div``
const Text1 = styled.div``
const Text = styled.div``
const TexHolder = styled.div``
const MegaHeadset = styled.div``
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
