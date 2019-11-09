import React, { useState } from 'react';

function TopicList(props) {

  const topics = props.topics.map( (topic, i) => (
	<div className='topic'>{topic}</div>
  ));

  return (
	<>
	  <div id='topic-list-header'>
		Topic List
	  </div>
	  <div id='topic-list-container'>
		<div id='topic-list'>
		  {topics}
		</div>
	  </div>
	</>
  )
}

export default TopicList;
