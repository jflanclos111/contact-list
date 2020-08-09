import React, { useState } from "react";
import "./App.scss";
import { IdCard } from "./components/id-card/id-card.component";
import { CONTACTS } from "./data/contacts";

export function App() {
  const [state, setState] = useState(CONTACTS);

  return (
    <div className="contacts">
      {state.map((contact) => {
        return (
          <IdCard
            key={contact.id}
            name={contact.name}
            homePhone={contact.homePhone}
            mobilePhone={contact.homePhone}
            workPhone={contact.workPhone}
            email={contact.email}
            avatarUrl={contact.avatarURL}
          />
        );
      })}
    </div>
  );
}
