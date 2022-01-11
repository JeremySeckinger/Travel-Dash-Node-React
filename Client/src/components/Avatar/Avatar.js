import React from "react";

const generateHslColor = (username, s, l) => {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  let h = hash % 360;
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
};

const Avatar = (props) => {
  const bgColor = generateHslColor(props.name, 100, 75);
  const avatarStyle = {
    width: `${props.size}px`,
    height: `${props.size}px`,
    verticalAlign: "middle",
    borderRadius: "50%",
    backgroundColor: bgColor,
  };
  return (
    <div style={{ display: "inline" }}>
      <img
        src={`https://robohash.org/${props.name}.png?set=set2`}
        style={avatarStyle}
        alt=""
      />
    </div>
  );
};

export default Avatar;
