// import React, { useState } from 'react'
import styled from "styled-components"
import pics from "../assets/head.png"
import pics1 from "../assets/bike4.png"
import pics2 from "../assets/pics1.png"
import pics3 from "../assets/bike3.png"
import pics4 from "../assets/pics4.png"




const Hero2 = () => {

// 


  return (
    <div>
      
      <Container>
        <Main>
        <Main1>
          <Product>
            <TrendHolder>
            <Trend>Trending Products</Trend>
            <ShortNote>"Stay ahead of the curve with our trending products"</ShortNote>
            </TrendHolder>

            <More>See All</More>
          </Product>
          </Main1>


          <Mega>
            <MegaHeadset src={pics}/>
            <TexHolder>
              <Text>New Collection</Text>
              <Text1>Strix Mega 1 </Text1>
              <Button><span>Shop Now</span></Button>
            </TexHolder>

          </Mega>

          <Div>
          <BikeHolder>
            <Bike src={pics1} />
            <TexHolder2>
              <Text>New Collection</Text>
              <Text1>SKX Cooper</Text1>
              <Button><span>Shop Now</span></Button>
            </TexHolder2>


          </BikeHolder>


          <EBike>
            <HarmanHolder>
              <Harman src={pics2} />
              <TexHolder3>
              <Text>New Collection</Text>
              <Text1>Harman BT</Text1>
              <Button><span>Shop Now</span></Button>
            </TexHolder3>

            </HarmanHolder>

            <ValkingHolder>
              <Valking src={pics3} />
              <TexHolder4>
              <Text>New Collection</Text>
              <Text1>Valking E-Bike</Text1>
              <Button><span>Shop Now</span></Button>
            </TexHolder4>

            </ValkingHolder>

          </EBike>
          </Div>

          <ScooterHolder>
              <Scooter src={pics4} />
              <TexHolder5>
              <Text>New Collection</Text>
              <Text1>Valking E-Bike</Text1>
              <Button><span>Shop Now</span></Button>
            </TexHolder5>
            </ScooterHolder>


        </Main>
      </Container>

    </div>
  )
}

export default Hero2
const Main1 = styled.div`
width: 100%;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0px;
`
const More = styled.div``
const ShortNote = styled.div``
const Trend = styled.div`
font-size: 20px;
font-weight: 500;
`
const TrendHolder = styled.div``
const Product = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
`
const TexHolder5 = styled.div`
position: absolute;
bottom: 10px;
left: 10px;
`
const Scooter = styled.img`
height: 70%;
position: absolute;
right: 0;

`
const ScooterHolder = styled.div`
width: 13%;
height: 100%;
position: relative;
background-color: #BDC3C7;
`
const TexHolder4 = styled.div`
position: absolute;
right: 10px;
`
const Valking = styled.img`
height:85%;
object-fit: contain;
position: absolute;
bottom: 0;
`
const ValkingHolder = styled.div`
width: 48%;
height: 100%;
background-color: #F6DFB3;
position: relative;
`
const TexHolder3 = styled.div`
position: absolute;
left: 10px;
`
const Harman = styled.img`
height:50%;
object-fit: contain;
position: absolute;
bottom: 10px;
right: 10px;


`
const Div = styled.div``
const HarmanHolder = styled.div`
width: 48%;
height: 100%;
background-color: #F9B8BE;
position: relative;
`
const TexHolder2 = styled.div`
position: absolute;
top:0 ;
left: 10px;
`
const Bike = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
position: absolute;
right: 10px;
`
const Button = styled.div`
width: 100px;
height: 25px;
background-color:black;
display: flex;
align-items:center;
justify-content: center;

span{
  color: white;
  font-size: 10px;
}

:hover{
  scale: 1.09;
}
`
const Text1 = styled.div`
color: black;
font-weight: 700;
margin: 5px 0px;
font-size: 12px;
`
const Text = styled.div`
color: black;
font-weight: 200;
margin: 5px 0px;
font-size: 12px;
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
margin: 0 30px;
height: 90%;


`
const EBike = styled.div`
display: flex;
width: 500px;
height: 48%;
margin: 10px 0;
justify-content: space-between;


`
const BikeHolder = styled.div`
background-color: #B0C7DD;
width: 500px;
height: 50%;
position: relative;
`
const Mega = styled.div`
width: 30%;
height: 100%;
padding: 2px 0;
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
justify-content: space-around;
flex-wrap:wrap;
`
const Container = styled.div`
width:100%;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
`
