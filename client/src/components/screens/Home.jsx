import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCauses } from "../../services/causes";
import styled from "styled-components";

const BodyComponent = styled.div`
  background-color: #9ADCF7;
  height: 100%;
  width: 100%;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

const HomeTitle = styled.div`
  padding: 22px 22px 0 22px;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`

const CauseContainer = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #FFFFFF;
  border-radius: 18px;
  box-shadow: 0 3px 6px #00000029;
  padding: 12px 0;
  margin: 15px;

  :hover {
    transform: scale(1.1);
  }

    // @media (max-width: 800px) {
    //   padding: 22px 0;
    //   margin: 45px;
    // }
    // @media (max-width: 1300px) {
    //   padding: 22px 0;
    //   margin: 25px;
    // }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  height: 45px;
  width: 92px;

  @media only screen and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1)  {
      height: 65px;
      width: 112;
    }
    @media (min-device-width: 1440px) {
      height: 85px;
      width: 132;
    }
`;

const CauseNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;

  // @media (max-width: 800px) {
  //   width: 300px;
  // }
  // @media (max-width: 1300px) {
  //   width: 500px;
  // }
`;

const CauseName = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

export default function Home(props) {
  const [allCauses, setAllCauses] = useState([]);

  useEffect(() => {
    const fetchCauses = async () => {
      const causes = await getAllCauses();
      setAllCauses(causes);
    };
    fetchCauses();
  }, []);

  return (
    <div>
      <BodyComponent>
        <HomeTitle style={{ color: "#2E348C", fontSize:"20px", fontWeight:"bold"}}>ORGANIZATIONS TO SUPPORT</HomeTitle>
        {allCauses.map((cause) => (
          <div key={cause.id}>
            <Link to={`/causes/${cause.id}`}>
              <CauseContainer>
                <ImageContainer>
                  <Image src={cause.image} alt={cause.name}></Image>
                </ImageContainer>
                <CauseNameContainer>
                  <CauseName style={{ color: "#333333", fontSize: "20px", fontWeight: "bold"}}>{cause.name}</CauseName>
                </CauseNameContainer>
              </CauseContainer>
            </Link>
          </div>
        ))}
      </BodyComponent>
    </div>
  );
}
