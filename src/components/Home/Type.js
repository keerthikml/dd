import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend Engineer (Java Spring Boot)",
          "Node.js REST API Developer",
          "Full Stack Developer (React + Spring Boot)",
          "Real-Time Systems (WebSocket & FCM)",
          "Building Scalable Backend Systems",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
