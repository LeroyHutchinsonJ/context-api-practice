import React, { useState, useContext } from "react";

//Plain empty context
const RoomContext = React.createContext();

//Component to manage the state of the room
const RoomStore = ({ children }) => {
  const [isLit, setLit] = useState(false);

  const toggleLight = () => {
    setLit(!isLit);
  };

  return (
    <RoomContext.Provider value={{ isLit, onToggleLight: toggleLight }}>
      {children} Blah Blah
    </RoomContext.Provider>
  );
};

const Room = () => {
  const { isLit, onToggleLight } = useContext(RoomContext);

  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      The Room is {isLit ? "lit" : "dark"}.<br />
      <button onClick={onToggleLight}>Flip</button>
    </div>
  );
};

const LightSwitch = () => (
  <RoomStore>
    <Room />
  </RoomStore>
);

export default LightSwitch;
