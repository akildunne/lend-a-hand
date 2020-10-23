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

export default function EventDashboard() {
  const [redirect, setRedirect] = useState(false);
  const [causeById, setCauseById] = useState([]);
  let { id } = useParams();


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
      <h3>Events</h3>
      {causeById.length !== 0 && causeById.events.map((event) => (
        <div key={event.id}>
          <Link to={`/events/${event.id}`}>
            <p>{event.name}</p>
          </Link>
        </div>
      ))}
      <Link to='/create'>Add New Event</Link>
      </div>
      </div>
  );
}
