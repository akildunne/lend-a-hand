import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { getOneCause } from "../../services/causes";
import BackButton from "../shared/BackButton";
import styled from "styled-components";

const BackDiv = styled.div`
  display: flex;
  padding-left: 36px;
  margin-top: 20px;
`;


const EventsCauseTitle = styled.div`
  display: flex;
  padding: 22px 22px 0 22px;
  justify-content: flex-start;
`;

const EventContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  // justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #FFFFFF;
  border-radius: 18px;
  box-shadow: 0 3px 6px #00000029;
  padding: 12px 5px;
  margin: 15px;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`

const EventTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

const EventDate = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

const EventDetailsButton = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

export default function EventDashboard(props) {
  const [redirect, setRedirect] = useState(false);
  const [causeById, setCauseById] = useState([]);
  let { id } = useParams();
  let { currentUser } = props;

  useEffect(() => {
    const fetchCauseEvents = async () => {
      const causeEvents = await getOneCause(id);
      setCauseById(causeEvents);
    };
    fetchCauseEvents();
  }, [id]);

  const goBack = (e) => {
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to={`/`} />;
  }

  return (
    <div>
       <BackDiv>
        <BackButton onClick={(e) => goBack()}></BackButton>
      </BackDiv>
    <div>
        <EventsCauseTitle style={{ color: "#2E348C", fontSize:"20px", fontWeight:"bold"}}>Events: {causeById.name}</EventsCauseTitle>
      {causeById.length !== 0 && causeById.events.map((event) => (
        <EventContainer key={event.id}>
          <Link to={`/events/${event.id}`}>
            <EventTitle style={{ color: "#333333", fontSize:"15px", fontWeight:"bold"}}>{event.name}</EventTitle>
            <EventDate style={{ color: "#939393", fontSize:"15px", fontWeight:"bold"}}>{event.date}</EventDate>
            <EventDetailsButton style={{ color: "#EC6A4D", fontSize:"15px", fontWeight:"bold"}}>View Event Details</EventDetailsButton>
          </Link>
        </EventContainer>
      ))}
        <div>
          { currentUser &&
            (currentUser.id === causeById.user_id) ?  
            <Link to='/create'>Add New Event</Link> : null
          }
          </div>
      </div>
      </div>
  );
}
