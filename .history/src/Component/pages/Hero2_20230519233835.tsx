// import React, { useState } from 'react'
import styled from "styled-components"
import pics from "../assets/head.png"
import pics1 from "../assets/bike4.png"




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
            <Bike src={pics1} />
            <TexHolder2>
              <Text>New Collection</Text>
              <Text1>SKX Cooper</Text1>
              <Button><span>Shop Now</span></Button>
            </TexHolder2>


          </BikeHolder>

          <EBike>

          </EBike>

        </Main>
      </Container>

    </div>
  )
}

export default Hero2
const TexHolder2 = styled.div``
const Bike = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
/* position: absolute; */
`
const Button = styled.div`
width: 120px;
height: 30px;
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
const Text1 = styled.div`
color: black;
font-weight: 700;
margin: 5px 0px;
`
const Text = styled.div`
color: black;
font-weight: 200;
margin: 5px 0px;
`
const TexHolder = styled.div`
z-index:1;
position: absolute;
bottom: 40px;
left: 10px;
`
const MegaHeadset = styled.img`
object-fit: scale-down;
position:absolute;
/* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
rotate: calc(-5deg);
margin: 0 40px;
height: 90%;


`
const EBike = styled.div``
const BikeHolder = styled.div`
background-color: #B0C7DD;
width: 500px;
height: 50%;
position: relative;
ba
`
const Mega = styled.div`
width: 30%;
height: 100%;
background-color: #ABEBC6;
display:flex;
justify-content:center;
/* align-items:center; */
flex-direction:column;
position:relative;
`
const Main = styled.div`
width:95%;
height: 100%;
display: flex;
`
const Container = styled.div`
width:100%;
height: 350px;
background-color: gray;
display: flex;
justify-content: center;
align-items: center;
`
