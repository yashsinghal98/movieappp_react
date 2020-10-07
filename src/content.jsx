import React from "react";
import "./styles.css";
export default function content(props) {
  return (
    <div className="cell">
      <div className="info">
        <div>
          <b>Movie Name:</b>
          {props.obj.Movie}
        </div>
        <div>
          <b>Rating:</b>
          {props.obj.Rating}
        </div>
        <div>
          <b>Actors:</b>
          {props.obj.Actors}
        </div>
      </div>
      <div className="but">
        <button onClick={props.clicked}>{props.obj.pressed===true?"🧡":"🖤"}</button>
        {props.obj.watchlisted===false?
        <button className="wis" onClick={props.watchlist}>WishList 📥</button>
        :<button className="wis1" onClick={props.watchlist}>WishList 📥</button>
        }
        <button onClick={props.del}>🗑</button>
      </div>
    </div>
  );
}
