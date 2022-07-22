//import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

export default CardList;
