import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCauses } from "../../services/causes";
import styled from "styled-components";

const CauseContainer = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: center;
  flex-direction: column;

  :hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
display: flex;
justify-content: center;
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  height: 165px;
  width: 300px;
`;

const CauseNameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CauseName = styled.div`
  display: flex;
  justify-content: center;
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
      <div>
        <h3>Organizations to Support</h3>
        {allCauses.map((cause) => (
          <div key={cause.id}>
            <Link to={`/causes/${cause.id}`}>
              <CauseContainer>
                <ImageContainer>
                  <Image src={cause.image} alt={cause.name}></Image>
                </ImageContainer>
                <CauseNameContainer>
                  <CauseName>{cause.name}</CauseName>
                </CauseNameContainer>
              </CauseContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
