import { useState } from "react";
import "./App.css";

function App() {
  const [winner, setWinner] = useState("");
  return (
    <>
      <div className="container">
        <h1>XO-GAME</h1>
        {!winner ? (
          <div className="b">
            <Box setWinner={setWinner}></Box>
          </div>
        ) : (
          <div className="btn" onClick={() => setWinner("")}>
            PLAY AGAIN
          </div>
        )}
        <div className="result">
          <p>the winner is {winner}</p>
        </div>
      </div>
    </>
  );
}

function Box({ setWinner }) {
  const [pointer, setPointer] = useState("X");
  const [data, setData] = useState([...Array(9).fill("")]);

  function setContent(i) {
    pointer == "X" ? setPointer("O") : setPointer("X");
    let newData = [...data];
    newData[i] = pointer;
    setData([...newData]);
  }

  (function calculate() {
    // console.log(data);
    if (
      (data[0] == data[1] && data[1] == data[2] && data[2] == "X") ||
      (data[3] == data[4] && data[4] == data[5] && data[5] == "X") ||
      (data[6] == data[7] && data[7] == data[8] && data[8] == "X") ||
      (data[0] == data[3] && data[3] == data[6] && data[6] == "X") ||
      (data[1] == data[4] && data[4] == data[7] && data[7] == "X") ||
      (data[2] == data[5] && data[5] == data[8] && data[8] == "X") ||
      (data[0] == data[4] && data[4] == data[8] && data[8] == "X") ||
      (data[2] == data[4] && data[4] == data[6] && data[6] == "X")
    ) {
      setTimeout(() => {
        setWinner("PLAYER X");
      }, 10);
    } else if (
      (data[0] == data[1] && data[1] == data[2] && data[2] == "O") ||
      (data[3] == data[4] && data[4] == data[5] && data[5] == "O") ||
      (data[6] == data[7] && data[7] == data[8] && data[8] == "O") ||
      (data[0] == data[3] && data[3] == data[6] && data[6] == "O") ||
      (data[1] == data[4] && data[4] == data[7] && data[7] == "O") ||
      (data[2] == data[5] && data[5] == data[8] && data[8] == "O") ||
      (data[0] == data[4] && data[4] == data[8] && data[8] == "O") ||
      (data[2] == data[4] && data[4] == data[6] && data[6] == "O")
    ) {
      setTimeout(() => {
        setWinner("PLAYER O");
      }, 10);
    }
  })();
  return (
    <>
      <div className="chance">chance of {pointer}</div>
      <div className="box-container">
        {" "}
        {[...Array(9)].map((e, i) => {
          return (
            <SmallBox
              key={i}
              box={i}
              data={data[i]}
              changeSymbol={setContent}
            />
          );
        })}
      </div>
    </>
  );
}

function SmallBox({ data, box, changeSymbol }) {
  return (
    <>
      <div className="box" onClick={() => changeSymbol(box)}>
        {data}
      </div>
    </>
  );
}
export default App;
