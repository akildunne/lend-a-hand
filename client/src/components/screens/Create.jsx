import React, { useState } from 'react'

export default function Create(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { handleEventCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleEventCreate(formData);
    }}>
      <h3>Create Event</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={formData.name}
          autoFocus
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
}
