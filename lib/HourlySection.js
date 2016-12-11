import React from "react";


export const HourlySection = React.createClass({

  getHourlyWeather(hourlyData, dailyWeather) {
    let dataArray = [];
    hourlyData.timeBreakDown.map((e, index) => {
      return(
        dataArray.push(<h1 key={index} >{e[`hour${index+1}`]}</h1>),

        this.setState({ hourlyWeather: dataArray, currentDay: dailyWeather.date })
      )
    })
  },

  displayHourlyWeatherSection() {
    let displaySection = [];
    if (this.props.hourlyWeather) {
      this.props.hourlyWeather.map((e, index) => {
        return (displaySection.push(
          <ul className="hourly-weather" key={index}>
            <h4>{index}:00</h4>
            <li>Temp:   {e.props.children.temp}</li>
            <li>Condition: {e.props.children.type}</li>
          </ul>
        ))
      })
    }

    if (this.props.currentDay) {
      return (
        <section>
          <h2>DATE: {this.props.currentDay}</h2>
          <p>(Hourly weather)</p>
          {displaySection}
        </section>)
    }
  },

  render() {
    return(
        <article className="hourly-section">{this.displayHourlyWeatherSection()}</article>
    )
  }
})
