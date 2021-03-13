import { motion } from 'framer-motion'
import React, {useState} from 'react'
import './css/Forum.css'
import Footer from './Footer'
import {Helmet} from "react-helmet";

const forumVariants = {
  hidden: {
      opacity: 0,
  },
  visible: {
      opacity: 1,
  },
  exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
  }
}

class Forum extends React.Component {

    //const [subTopicName, setSubTopicName] = useState();
    
    state = {
      visible: false,
      content: '',
      topics : [
        {text: 'Discord', key: '1'},
        {text: 'Propuneri server', key: '2'},
        {text: 'Cereri pentru grade', key: '3'}
      ]
    };
    showHide() {
      this.setState({
        visible: !this.state.visible
      })
    }
    
    handleChange = (e) => {
      this.setState({
        content: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.content);
      this.setState({
        content: ''
      })
    }

    /*addSubTopic = (e) => {
      this.state.topics.map(topic => (
        topic.id = Math.random();
        let topics = [...this.state.topics]
      ))}
    }*/

    render() {
      return (
        <motion.div className="container-fluid" variants={forumVariants} initial="hidden" animate="visible" exit="exit">
          <Helmet>
              <title>FlashMc | Forum</title>
          </Helmet>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md- 12 col-lg-9 col-xl-9 col-xxl-9">
              { this.state.visible? <div className="overlay">
                <div className="subtopicCreation">
                  <div className="creation-form">
                    <div className="title">Creaza un subtopic nou <span onClick={() => {this.setState({visible:false})}} className="closeWindow">X</span></div>
                    <p>Topicuri</p>
                    <select id="list">{this.state.topics.map(topic => (
                        <option value={topic.key}>{topic.text}</option>
                    ))}</select>
                    <p>Titlu subtopic</p>
                    <input type="text" id="topicTitle" onChange={this.handleChange} required value={this.state.content} />
                    {/*<span id="error">Introduceti numele subtopicului</span>*/}
                    <button onClick={this.handleSubmit} className="createSubTopic">Creaza subtopicul</button>
                  </div>
                </div>
              </div> : null }

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="topics">
                  <div className="title text-center" alt="flash-mc topic subtopic" title="flash-mc topic subtopic">Topicuri / Subtopicuri</div>
                  <button onClick={() => this.showHide()} className="newSubTopic">Creaza un nou subtopic</button>
                  <button alt="flash-mc-ro create new topics" title="flash-mc-ro create new topics" className="newTopic">Creaza un nou topic</button>
                </div>
              </div>

              <div className="col-xs-12 col-lg-12">
                <div className="discordTopic">
                  <div className="title" alt="flash-mc discord topic" title="flash-mc discord topic">Discord</div>
                  <div className="subTopics"></div>
                </div>
              </div>

              <div className="col-xs-12 col-lg-12">
                <div className="serverTopic">
                  <div className="title" alt="flash-mc server proposals topic" title="flash-mc server proposal topic">Propuneri server</div>
                    <div className="subTopics"></div>
                </div>
              </div>

              <div className="col-xs-12 col-lg-12">
                <div className="requestTopic">
                  <div className="title" alt="flash-mc rank request topic" title="flash-mc rank request topic">Cereri pentru grade</div>
                    <div className="subTopics"></div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-lg-3">
              <div className="discord text-center">
                <iframe src="https://discord.com/widget?id=616206076412690433&theme=dark" height="399" allowtransparency="true" alt="flash-mc discord connect" title="flash-mc discord connect" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
              </div>
            </div>
          </div>
          <Footer/>
        </motion.div>
      )
    }
  }

  export default Forum