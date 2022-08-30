import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

export default function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Babiii",
      userImage:
        "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/293605373_5482333775122038_3053823897547301568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKlDykIp1pjvdNIcZvIBbJrWrpzDk70DStaunMOTvQNPUDFtcy6l5oJkPx7o0DemCdKqKmpytKVo6oEe5V1jHY&_nc_ohc=epmd1-3dvJwAX9A7X4b&tn=qDiW-WIA7rYp5rcl&_nc_ht=scontent.fcrk2-2.fna&oh=00_AT_yxF6iODC3zoaIsSVYFW1VHm0cRTDz8UPe-K1rYsnslw&oe=630EFA78",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button hidden type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 75%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;
