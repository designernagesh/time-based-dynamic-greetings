import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState(" ");
  const time = new Date();
  const currentHours = time.getHours();
  const currentTime = time.toLocaleTimeString();

  useEffect(() => {
    if (currentHours >= 5 && currentHours < 12) {
      setMessage('Good Morning!')
    }
    else if (currentHours >= 12 && currentHours < 19) {
      setMessage('Good Afternoon!')
    }
    else if (currentHours > 19) {
      setMessage('Good Night!')
    }
  }, [])

  return (
    <>
      <div className="container">
        <h2 className="title">Time Based Dynamic Greetings</h2>
        <p className="sub-title">Check the current Greeting and Current Time! 😊 </p>
        <p className="result">
          {message}
          <span>
            Time: {currentTime}
          </span>
        </p>
      </div>
    </>
  )
}

export default App;
