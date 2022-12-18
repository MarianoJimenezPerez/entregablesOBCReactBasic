import React, { useState } from "react";
import getRandomJoke from "../services/APIChucknorries";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleJoke = (opinion) => {
    if (opinion === "like") {
      setLikes(likes + 1);
    }
    if (opinion === "dislike") {
      setDislikes(dislikes + 1);
    }
    getRandomJoke()
      .then((response) => setJoke(response.data))
      .catch((error) => `Something went wrong ${error}`);
  };

  return (
    <div>
      <div>
        Joke:{" "}
        {joke !== null ? (
          <div>
            <div>{joke.value}</div>
            <Button onClick={() => handleJoke("like")}>
              <ThumbUpIcon></ThumbUpIcon>
            </Button>

            <Button onClick={() => handleJoke("dislike")}>
              <ThumbDownAltIcon></ThumbDownAltIcon>
            </Button>

            <div>Likes: {likes}</div>
            <div>Dislikes: {dislikes}</div>
          </div>
        ) : (
          <div>
            <p>Press the start button to init</p>
            <Button variant="contained" onClick={() => handleJoke("")}>
              Start
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Joke;
