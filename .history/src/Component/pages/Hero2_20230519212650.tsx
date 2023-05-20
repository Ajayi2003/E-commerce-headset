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
const TexHolder = styled.div`
z-index:1;
`
const MegaHeadset = styled.img`
object-fit: cover;
position:absolute;
/* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
rotate: scale(45)


`
const EBike = styled.div``
const BikeHolder = styled.div``
const Mega = styled.div`
width: 30%;
height: 100%;
background-color: #ABEBC6;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:relative;
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
