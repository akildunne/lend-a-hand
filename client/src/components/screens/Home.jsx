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

  @media only screen and (min-device-width: 768px) {
    padding: 32px 32px 0 32px;
  }
  @media (min-device-width: 1300px) {
    padding: 42px 42px 0 42px;
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

    @media only screen and (min-device-width: 768px){
      padding: 22px 0;
      margin: 25px 135px;;
    }
    @media (min-device-width: 1300px) {
      flex-flow: row-wrap;
      padding: 42px 0;
      margin: 25px; 205px;
    }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  // @media only screen and (min-device-width: 768px) {
    
  // }
  // @media (min-device-width: 1300px) {
    
  // }
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  height: 45px;
  width: 92px;

  @media only screen and (min-device-width: 768px)  {
      height: 65px;
      width: 112;
    }
    @media (min-device-width: 1300px) {
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
