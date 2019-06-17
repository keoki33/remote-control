import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    power: true,
    volume: 1
  };

  postCommand = (x, value) => {
    fetch("https://boiling-tundra-71042.herokuapp.com/commands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        queryResult: { parameters: { [x]: value } }
      })
    }).then(resp => resp.json());
  };

  powerButton = () => {
    if (this.state.power) {
      this.postCommand("on", "true");
      this.setState({ power: false });
    } else {
      this.postCommand("on", "false");
      this.setState({ power: true });
    }
  };

  volume = x => {
    if (x === "up" && this.state.volume < 1) {
      this.setState({ volume: this.state.volume + 0.1 }, () => {
        this.postCommand("volume", this.state.volume);
      });
    } else if (x === "down" && this.state.volume > 0.1) {
      this.setState({ volume: this.state.volume - 0.1 }, () => {
        this.postCommand("volume", this.state.volume);
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card">
          {console.log(this.state.volume)}
          <img
            className="remoteimage"
            src={require(`./sony.jpg`)}
            // alt=""
            // width="104"
            // height="34"
          />
          <button
            className="power"
            type="button"
            onClick={event => {
              this.powerButton();
            }}
          >
            Power
          </button>

          <button className="blank" type="button" onClick={event => {}}>
            blank button
          </button>

          <button
            className="closeWindow"
            type="button"
            onClick={event => {
              this.postCommand("close", "false");
            }}
          >
            Close Window
          </button>

          <button
            className="showForecast"
            type="button"
            onClick={event => {
              this.postCommand("forecast", "true");
            }}
          >
            Show Forecast
          </button>

          <button
            className="showNews"
            type="button"
            onClick={event => {
              this.postCommand("news", "true");
            }}
          >
            Show News
          </button>

          <button
            className="emailMe"
            type="button"
            onClick={event => {
              this.postCommand("email", "georgewmail-mirror@yahoo.com");
            }}
          >
            Email Me
          </button>

          <button
            className="showCalendar"
            type="button"
            onClick={event => {
              this.postCommand("calendar", "fullcalendarin");
            }}
          >
            Show Calendar
          </button>

          <button
            className="youtubeFullscreen"
            type="button"
            onClick={event => {
              this.postCommand("youtubeSize", "videoFull");
            }}
          >
            Youtube Fullscreen
          </button>

          <button
            className="playYoutube"
            type="button"
            onClick={event => {
              this.postCommand("youtube", "true");
            }}
          >
            Play Youtube
          </button>

          <button
            className="pauseYoutube"
            type="button"
            onClick={event => {
              this.postCommand("youtube", "false");
            }}
          >
            Pause Youtube
          </button>

          <button
            className="goToSleep"
            type="button"
            onClick={event => {
              this.postCommand("on", "false");
            }}
          >
            Go To Sleep
          </button>

          <button
            className="wakeUp"
            type="button"
            onClick={event => {
              this.postCommand("on", "true");
            }}
          >
            Wake Up
          </button>
          <div className="volume">
            <button
              className="volumeUp"
              type="button"
              onClick={event => {
                this.volume("up");
              }}
            >
              +
            </button>

            <button
              className="volumeDown"
              type="button"
              onClick={event => {
                this.volume("down");
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="logo">
          <h1>SONY</h1>
          <div>
            <h3>PERSONAL MIRROR SYSTEM</h3>
            <h4>MI-RR-3PO</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
