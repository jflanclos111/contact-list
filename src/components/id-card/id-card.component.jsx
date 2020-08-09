import React from "react";
import "./id-card.styles.scss";
import { TextBox } from "../text-box/text-box.component";

export function IdCard({ name, homePhone, mobilePhone, workPhone, email, avatarUrl }) {
  return (
    <div className="card">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${avatarUrl})`,
        }}
      ></div>
      <div className="content">
        <div className="card-title-box">
          <TextBox text={`${name}`} />
        </div>
        <div className="card-text-box">
          <TextBox text={`Home Phone: ${homePhone}`} />
        </div>
        <div className="card-text-box">
          <TextBox text={`Mobile Phone: ${mobilePhone}`} />
        </div>
        <div className="card-text-box">
          <TextBox text={`Work Phone: ${workPhone}`} />
        </div>
        <div className="card-text-box">
          <TextBox text={`Email: ${email}`} />
        </div>
      </div>
    </div>
  );
}
