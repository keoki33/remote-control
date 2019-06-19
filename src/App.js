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

  // volume = x => {
  //   if (x === "up" && this.state.volume < 1) {
  //     this.setState({ volume: this.state.volume + 0.1 }, () => {
  //       this.postCommand("volume", this.state.volume);
  //     });
  //   } else if (x === "down" && this.state.volume > 0.1) {
  //     this.setState({ volume: this.state.volume - 0.1 }, () => {
  //       this.postCommand("volume", this.state.volume);
  //     });
  //   }
  // };

  render() {
    return (
      <div className="wrapper" onTouchStart="">
        <div className="card">
          {console.log(this.state.volume)}
          {/* <img
            className="remoteimage"
            src={require(`./sony.jpg`)}
            // alt=""
            // width="104"
            // height="34"
          /> */}
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

          <button
            className="one"
            type="button"
            onClick={event => {
              this.postCommand(this.postCommand("videoone", "videoone"));
            }}
          >
            Video One
          </button>

          <button
            className="two"
            type="button"
            onClick={event => {
              this.postCommand(this.postCommand("videotwo", "videotwo"));
            }}
          >
            Video Two
          </button>

          <button
            className="cameraOn"
            type="button"
            onClick={event => {
              this.postCommand(this.postCommand("cameraon", "cameraon"));
            }}
          >
            Display Security
          </button>

          <button
            className="cameraOff"
            type="button"
            onClick={event => {
              this.postCommand(this.postCommand("cameraoff", "cameraoff"));
            }}
          >
            Close Security
          </button>

          <div className="volume">
            <button
              className="volumeUp"
              type="button"
              onClick={event => {
                this.postCommand("volume", "false");
              }}
            >
              <i class="material-icons">add</i>
            </button>
            <p>Volume</p>
            <button
              className="volumeDown"
              type="button"
              onClick={event => {
                this.postCommand("volume", "true");
              }}
            >
              <i class="material-icons">remove</i>
            </button>
          </div>
        </div>
        <div className="logo">
          <h1>REFLECTERE</h1>
          <div className="logo2">
            <h3 className="logo3">PERSONAL MIRROR SYSTEM</h3>
          </div>
          <h4 id="model">MI-RR-3PO</h4>
          <img
            className="flat"
            src={require(`./flat.gif`)}
            alt=""
            width="100"
            height="100"
          />
        </div>
      </div>
    );
  }
}

export default App;
