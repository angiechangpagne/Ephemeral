import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import app from '../../base';

// View Components
import TextInput from '../presentation/TextInput';
import TopicList from '../presentation/TopicList';

function Dashboard() {

  /*** State Variables ***/
  const [currentTopic, setTopic] = useState('');
  const [topics, addTopic] = useState([]);

  /*** Lifecycle Actions ***/
    // componentDidMount //
  useEffect(getTopics, []);
    
    // componentWillUpdate //


  /*** Helper Functions ***/
  function getTopics() {
	console.log('getting topics');
	superagent
	  .get('/api/test')
	  .then(res => {
		addTopic(res.body.topics);
	  });

  }

  function updateTopic(e) {
	const newTopic = e.target.value;
	setTopic(newTopic)
  }

  function onSubmit(e) {
	e.preventDefault();
	const topicList = [...topics, currentTopic];
	addTopic(topicList);
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

		<TopicList topics={topics} />

		<button className='btn btn-danger signout' onClick={() => app.auth().signOut()}>Sign Out</button>
	  </div>

	</div>
  )
}

export default Dashboard;

