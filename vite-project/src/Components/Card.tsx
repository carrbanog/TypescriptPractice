import React from "react";
import type { UserInfo } from "../types/UserInfo";
import "./Card.css";

interface CardProps {
  getUserInfo: UserInfo;
}

const Card = ({ getUserInfo }: CardProps) => {
  return (
    <div className="portfolio-card">
      <div className="card-header">
        <h2 className="name">{getUserInfo.name}</h2>
        <p className="email">{getUserInfo.email}</p>
      </div>
      <div className="card-body">
        <p className="introduce">{getUserInfo.introduce}</p>
      </div>
      <div className="card-footer">
        <h4>Skills</h4>
        <div className="skills-container">
          {getUserInfo.selectedSkills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
