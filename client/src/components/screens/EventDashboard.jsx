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

const EventContainer = styled.div`
  align-items: flex-start;
`

const EventsCauseTitle = styled.div`
  display: flex;
  padding: 22px 22px 0 22px;
  align-content: flex-start;
`;

const EventTitle = styled.div`
  align-content: flex-start;
`;

const EventDate = styled.div`
  align-content: flex-start;
`;

const EventDetailsButton = styled.div`
  align-content: flex-start;
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
