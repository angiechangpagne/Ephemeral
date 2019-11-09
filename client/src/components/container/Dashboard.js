import React, { useState } from 'react';

// View Components
import TextInput from '../presentation/TextInput';

function Dashboard() {

  // Declare state variables
  const [currentTopic, setTopic] = useState('');
  const [topics, addTopic] = useState([]);

  function updateTopic(e) {
	const newTopic = e.target.value;
	setTopic(newTopic)
  }

  function onSubmit(e) {
	e.preventDefault();
	console.log(currentTopic);
  }

  return (
	<div id='dashboard-container'>
	  <div className='dashboard-header'>
		Ephemeral
	  </div>
	  <div id='main-interface'>
		<h1 id='topic-input-header'>Dashboard</h1>
		<div id='topic-input-container'>
		  <TextInput name='topic' value={currentTopic} type='text' onChange={updateTopic} placeholder='Add a new topic' />
		  <input type='submit' value='Add Topic' className='btn btn-info btn-block mt-4' onClick={onSubmit} />
		</div>
	  </div>
	</div>
  )
}

export default Dashboard;

