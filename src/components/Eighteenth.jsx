import React from 'react';
import PageBody from './reusable/PageBody';
import './scss/Eighteenth.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Eighteenth = () => {

  const messageCardsData = [
    { title: "HAPPY 18TH BIRTHDAY", color: "blue" },
    { title: "THIS IS IT LIIT!!!", color: "white" },
    { title: "BETTER THAN YOU BELIEVE", color: "black" },
    { title: "I WISH YOU BEST LUCK", color: "white" },
    { title: "WELCOME TO ADULTHOOD", color: "blue" },
  ]

  const eighteenthVariant = {
    hidden: {
      opacity: 0,
      y: '-50px'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.5, ease: "easeOut" }
    },

    exit: {
      y: '-50px',
      opacity: 0,
      transition: { ease: "easeIn" }
    }
  }

  return (
    <motion.div className="eighteenth container"
      variants={eighteenthVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PageBody header="18th" photoSrc="./svg/display_images/honeybunch_disp2.svg"/>    

      <div className="message-card-container">
        {messageCardsData.map((data, i) => <MessageCard title={data.title} color={data.color} key={i} />)}
      </div>
    </motion.div>
  )
}

const MessageCard = props => {
  const { title, color } = props;

  return (
    <div className={`message-card ${color}`}>
      <div className="message-head h-1">{title}</div>

      <Link to="/">
        <button className="message-button btn-text">READ</button>
      </Link>
    </div>
  )
}

export default Eighteenth;