import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../Assets/Assets";
import Navbar from "../../Layout/Navbar/Navbar";
import "./Messages.scss";

export default function Messages() {
  return (
    <div className="messages">
      <Navbar />
      <div className="message_container">
        <div className="left">
          <div className="message_header">
            <div className="title">Messages</div>
          </div>

          <div className="profiles">
            <div className="profile">
              <div>
                <div className="profile_img">
                  <img src={images.Message_profile_1} alt="" />
                </div>
              </div>

              <div className="profile_details">
                <div className="name">Oscar Monroe</div>
                <div className="profile_summery">
                  Bonjour, je voudrais savoir combien de nuits je peux réserver
                  dans votre
                </div>
              </div>
            </div>
            <div className="profile">
              <div>
                <div className="profile_img">
                  <img src={images.Message_profile_1} alt="" />
                </div>
              </div>

              <div className="profile_details">
                <div className="name">Oscar Monroe</div>
                <div className="profile_summery">
                  Bonjour, je voudrais savoir combien de nuits je peux réserver
                  dans votre
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="message_header">
            <div className="title">Olivier Giroud</div>

            <button className="button">Voir le profil</button>
          </div>

          <div className="message_replay_block">
            {messageFakeData.map((item, index) => (
              <div key={index} className={`module-main ${item.status}`}>
                {item.status === "writer" && (
                  <div className="top-message">
                    <div className="image cover"></div>
                    <h3 className="profile_name">{item.name}</h3>
                  </div>
                )}

                <div className="message_body">
                  <Link to="/email-details" className="message_element">
                    <div className="title">
                      {item.title}
                      <br />
                      <br />
                      {item.description}
                      <br />
                      <br />
                      {item.greetings},
                      <br />
                      <br />
                      {item.sender}
                    </div>
                    <p className="time">{item.time}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="message_box">
            <form action="">
              <textarea
                name=""
                className="input"
                placeholder="Aa"
                id=""
              ></textarea>

              <div className="replay_button">Envoyer</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const messageFakeData = [
  {
    name: "Olivier Giroud",
    title: "  Bonjour",
    description:
      "J'aurais souhaité connaître le prix pour 5 nuits dans votre port.    Mon voilier fait 9m50 de long et xm de profondeur",
    greetings: "Cordialement",
    sender: "Olivier",
    time: "14h45",
    status: "writer",
  },
  {
    name: "Olivier Giroud",
    title: "  Bonjour",
    description:
      "J'aurais souhaité connaître le prix pour 5 nuits dans votre port.",
    greetings: "Cordialement",
    sender: "Olivier",
    time: "14h45",
    status: "answer",
  },
  {
    name: "Olivier Giroud",
    title: "  Bonjour",
    description:
      "J'aurais souhaité connaître le prix pour 5 nuits dans votre port.",
    greetings: "Cordialement",
    sender: "Olivier",
    time: "14h45",
    status: "writer",
  },
  {
    name: "Olivier Giroud",
    title: "  Bonjour",
    description:
      "J'aurais souhaité connaître le prix pour 5 nuits dans votre port.",
    greetings: "Cordialement",
    sender: "Olivier",
    time: "14h45",
    status: "answer",
  },
];
