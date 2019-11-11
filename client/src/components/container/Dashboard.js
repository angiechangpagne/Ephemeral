import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import app from '../../base';

// View Components
import TextInput from '../presentation/TextInput';
import TopicList from '../presentation/TopicList';
import { Carousel } from 'react-bootstrap';

function Dashboard(props) {

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
	  .get(`http://localhost:5000/api/topics/${props.user.uid}`)
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
	superagent
	  .post(`http://localhost:5000/api/topics/${props.user.uid}`)
	  .send(currentTopic)
	  .then(res => console.log(JSON.stringify(res.body)))
	  .catch(err => console.log('Error saving topic: ', err));
  }


  return (
	<div id='dashboard-container'>

	  <div className='dashboard-header'>
		<Carousel>
		  <Carousel.Item>
			<img
			  className="d-block w-100"
			  src="https://picsum.photos/800/400"
			  alt="First slide"
			/>
			<Carousel.Caption>
			  <h3>First slide label</h3>
			  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
			<img
			  className="d-block w-100"
			  src="http://placehold.jp/800x400.png"
			  alt="Third slide"
			/>

			<Carousel.Caption>
			  <h3>Second slide label</h3>
			  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
			<img
			  className="d-block w-100"
			  src="https://picsum.photos/800/400"
			  alt="Third slide"
			/>

			<Carousel.Caption>
			  <h3>Third slide label</h3>
			  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
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

