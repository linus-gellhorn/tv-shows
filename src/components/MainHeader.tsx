import { useState } from "react";

export default function MainHeader(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState("");

  return (
    <>
      <h1>Game of Thrones Episodes</h1>
      <input
        type="text"
        placeholder="Search for episode(s)"
        value={typedMessage}
        onChange={(event) => {
          setTypedMessage(event.target.value.toLowerCase());
        }}
      />
      <p>You are searching for: {typedMessage}</p>
    </>
  );
}
