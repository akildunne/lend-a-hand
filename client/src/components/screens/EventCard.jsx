import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect, useHistory } from "react-router-dom";
import { getOneEvent, destroyEvent } from "../../services/events";
// import { getOneCause } from "../../services/causes";
import BackButton from "../shared/BackButton";
import DeleteModal from "../shared/DeleteModal";
import styled from "styled-components";

const BackDiv = styled.div`
  display: flex;
  padding-left: 36px;
  margin-top: 20px;
`;

// const DeleteButton = styled.button`

// `;

const EventContent = styled.div``;

const EventTitle = styled.div`
  display: flex;
  padding: 22px 22px 0 22px;
  justify-content: flex-start;
`;

const EventInfoCard = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
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
`;

const EventSubTitle = styled.div``;

const EventImage = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 5px;
  margin: 5px;
`;

const EventDate = styled.div`
  justify-content: flex-start;
  padding: 5px;
`;

const Location = styled.div`
  justify-content: flex-start;
  padding: 5px;
`;

const AgeGroup = styled.div`
  justify-content: flex-start;
  padding: 5px;
`;

const EventDescription = styled.div`
  justify-content: flex-start;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const EditButton = styled.div`
  padding: 10px 15px;
  background-color: #F4B24E;
  border-radius: 5px;
`;

export default function EventCard(props) {
  const [redirect, setRedirect] = useState(false);
  const [event, setEvent] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  // const [causeById, setCauseById] = useState([]);
  // const [isDeleted, setIsDeleted] = useState(false);
  const { id } = useParams();
  let { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchEvent = async () => {
      const eventItem = await getOneEvent(id);
      console.log(eventItem);
      setEvent(eventItem);
    };
    fetchEvent();
  }, [id]);

  // useEffect(() => {
  //   const fetchCauseEvents = async () => {
  //     const causeEvents = await getOneCause(id);
  //     setCauseById(causeEvents);
  //   };
  //   fetchCauseEvents();
  // }, [id]);

  // const deleteConfirmation = () => {
  //   eventDeleted();
  // }

  // const eventDeleted = async () => {
  //   const deleted = await destroyEvent(id);
  //   setIsDeleted(deleted);
  //   history.push("/");
  // };

  // if (isDeleted) {
  //   // return <Redirect to="/events" />;
  // }

  const goBack = (e) => {
    setRedirect(true);
  };

  if (redirect === true) {
    // return <Redirect to={`/causes/${cause.id}`} />;
  }

  return (
    <div>
      <BackDiv>
        <BackButton onClick={(e) => goBack()}></BackButton>
      </BackDiv>
      <EventContent>
        <EventTitle
          style={{ color: "#2E348C", fontSize: "20px", fontWeight: "bold" }}
        >
          {event.name}
        </EventTitle>
        <EventInfoCard>
          <EventSubTitle
            style={{ color: "#333333", fontSize: "15px", fontWeight: "bold" }}
          >
            {event.name}
          </EventSubTitle>
          <EventImage src={event.image} alt={event.name}></EventImage>
          <EventDate
            style={{ color: "#939393", fontSize: "15px", fontWeight: "bold" }}
          >
            Date: {event.date}
          </EventDate>
          <Location
            style={{ color: "#333333", fontSize: "15px", fontWeight: "bold" }}
          >
            Location: {event.location}
          </Location>
          <AgeGroup
            style={{ color: "#333333", fontSize: "15px", fontWeight: "bold" }}
          >
            Age Group: {event.age_group}
          </AgeGroup>
          <EventDescription
            style={{ color: "#333333", fontSize: "15px", fontWeight: "bold" }}
            key={event.id}
          >
            Description: {event.reason}
          </EventDescription>
        </EventInfoCard>
      </EventContent>
      <ButtonContainer>
      <div>
        {currentUser && currentUser.id === event.user_id ? (
          <Link to={`/events/edit/${event.id}`}>
            <EditButton style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: "bold" }}>Edit</EditButton>
          </Link>
        ) : null}
      </div>
      <div>
        {currentUser && currentUser.id === event.user_id ? (
          <DeleteModal />
        ) : // <DeleteButton onClick={eventDeleted}/>
        null}
        </div>
        </ButtonContainer>
    </div>
  );
}
