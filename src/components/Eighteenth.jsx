import React from 'react';
import PageBody from './reusable/PageBody';
import './scss/Eighteenth.css';
import { Link } from 'react-router-dom';

const Eighteenth = () => {

  const messageCardsData = [
    { title: "HAPPY 18TH BIRTHDAY", color: "blue" },
    { title: "THIS IS IT LIIT!!!", color: "white" },
    { title: "BETTER THAN YOU BELIEVE", color: "black" },
    { title: "I WISH YOU BEST LUCK", color: "white" },
    { title: "WELCOME TO ADULTHOOD", color: "blue" },
  ]
  return (
    <React.Fragment>
      <PageBody header="18th" photoSrc="./svg/display_images/honeybunch_disp2.svg"/>    

      <div className="message-card-container">
        {messageCardsData.map((data, i) => <MessageCard title={data.title} color={data.color} />)}
      </div>
    </React.Fragment>
  )
}

const MessageCard = props => {
  const { title, color } = props;

  return (
    <div className={`message-card ${color}`}>
      <div className="message-head h-1">{title}</div>

      <Link to={color}>
        <button className="message-button btn-text">READ</button>
      </Link>
    </div>
  )
}

export default Eighteenth;