import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCauses } from "../../services/causes";
import styled from "styled-components";

const BodyComponent = styled.div`
  background-color: #9ADCF7;
  height: 100%;
  width: 100%;
`;

const HomeTitle = styled.div`
  padding: 22px 22px 0 22px;
`

const CauseContainer = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #FFFFFF;
  border-radius: 18px;
  box-shadow: 0 3px #00000029;
  padding: 12px;
  margin: 15px;

  :hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  height: 25px;
  width: 52px;
  // padding: 20px;
`;

const CauseNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`;

const CauseName = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
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
