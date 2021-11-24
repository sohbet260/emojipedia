import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createEmoji(emojipedi) {
  return (
    <Card
      key={emojipedi.id}
      emoji={emojipedi.emoji}
      name={emojipedi.name}
      meaning={emojipedi.meaning} 
      
      />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)} </dl>
    </div>
  );
}

export default App;
