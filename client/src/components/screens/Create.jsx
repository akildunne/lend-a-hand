import React, { useState } from 'react'
import { postEvent } from "../../services/events";
import { Redirect } from "react-router-dom";
import BackButton from "../shared/BackButton";
import styled from "styled-components";

const BackDiv = styled.div`
  display: flex;
  padding-left: 36px;
  margin-top: 20px;
`;

export default function Create(props) {
  const [redirect, setRedirect] = useState(false);
  const [isCreated, setCreated] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: "",
    reason: "",
    location: "",
    age_group: "",
  })

  const handleChange = (e) => {
    const target = e.target;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newEvent)
    let createdEvent = {...newEvent, cause_id: props.userCause.id }
    const created = await postEvent(createdEvent);
    setCreated({ created });
  }
  
  if (isCreated) {
    return <Redirect to={`/events`} />;
  }

  const goBack = (e) => {
    setRedirect(true);
  };

  return (
    <div>
    <div>
       <BackDiv>
        <BackButton onClick={(e) => goBack()}></BackButton>
      </BackDiv>
    </div>
    <form onSubmit={handleSubmit}>
      <h3>Create Event</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={newEvent.name}
          autoFocus
          onChange={handleChange}
        />
      </label>
      <label>
        Reason:
        <input
          type="text"
          name='reason'
          value={newEvent.reason}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name='location'
          value={newEvent.location}
          onChange={handleChange}
        />
      </label>
      <label>
        Age Group:
        <input
          type="text"
          name='age_group'
          value={newEvent.age_group}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
      </form>
      </div>
  )
}
