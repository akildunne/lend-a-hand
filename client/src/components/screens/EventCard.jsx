import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
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

export default function EventCard(props) {
  const [redirect, setRedirect] = useState(false);
  const [event, setEvent] = useState([]);
  // const [causeById, setCauseById] = useState([]);
  // const [isDeleted, setIsDeleted] = useState(false);
  const { id } = useParams();
  let { currentUser } = props;

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
      <div>
        <h3>{event.name}</h3>
        <p key={event.id}>{event.reason}</p>
        <p>{event.location}</p>
        <p>{event.age_group}+</p>
      </div>
      <div>
        {currentUser && currentUser.id === event.user_id ? (
          <Link to={`/events/edit/${event.id}`}>
            <div>Edit</div>
          </Link>
        ) : null}
      </div>
      {/* <DeleteModal onClick={handleShow}>Delete</DeleteModal> */}
      {/* <div onClick={deleteConfirmation}>Delete</div> */}
    </div>
  );
}
