import React from "react";
import "./styles.css";
import Content from "./content";
export default function App() {
  const [data, setdata] = React.useState([
    {
      Movie: "Malang",
      Rating: 7,
      Actors: "Aditya Roy Kapur, Disha Patani",
      pressed: false,
      watchlisted:false
    },
    {
      Movie: "Hacked",
      Rating: 6,
      Actors: "Hina Khan, Rohan Shah",
      pressed: false,
      watchlisted:false
    },
    {
      Movie: "Kaamyaab",
      Rating: 6.5,
      Actors: "Sanjay Mishra, Deepak Dobriyal",
      pressed: false,
      watchlisted:false
    },
    {
      Movie: "Laxmmi Bomb",
      Rating: 6,
      Actors: "Akshay Kumar, Kiara Advani",
      pressed: false,
      watchlisted:false
    }
  ]);
  function delele(val) {
    let arr = [...data];
    arr = arr.filter((el, index) => (index !== val ? el : null));
    setdata(arr);
  }
  function change(val) {
    let arr = [...data];
    arr[val].pressed ? (arr[val].pressed = false) : (arr[val].pressed = true);
    setdata(arr);
  }
  function watch(val) {
    let arr = [...data];
    arr[val].watchlisted ? (arr[val].watchlisted = false) : (arr[val].watchlisted = true);
    setdata(arr);
  }
  return (
    <div className="Box">
      {data.map((el, index) => (
        <Content
          key={index}
          obj={el}
          del={() => delele(index)}
          clicked={() => change(index)}
          watchlist={()=>{watch(index)}}
        />
      ))}
    </div>
  );
}
