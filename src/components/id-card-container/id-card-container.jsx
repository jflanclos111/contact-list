import React from "react";
import "./id-card-container.scss";
import { IdCard } from "../id-card/id-card.component";
import { TextBox } from "../text-box/text-box.component";

export function IdCardContainer({ contactList }) {
  let responses = [
    "Hmmm...I don't think you've ever met that person before.",
    "Maybe try a different name?",
    "Wow! That's a strange name. No idea who that is.",
    "Do you even type, bro?",
    "Careful with that keyboard!",
    "Who is that?",
    "I'm sorry. I don't know as many people as you do.",
    "Is that even a real person?",
    "Now you're just making people up.",
  ];

  function randomResponse(responseArr) {
    let response = responseArr[Math.floor(Math.random() * responseArr.length)];
    console.log(response);
    return response;
  }

  return (
    <div className="contacts">
      {contactList.length < 1 ? (
        <TextBox text={randomResponse(responses)} />
      ) : (
        contactList.map((contact, index) => {
          return (
            <IdCard
              key={index}
              name={contact.name}
              homePhone={contact.homePhone}
              mobilePhone={contact.homePhone}
              workPhone={contact.workPhone}
              email={contact.email}
              avatarUrl={contact.avatarURL}
            />
          );
        })
      )}
    </div>
  );
}
