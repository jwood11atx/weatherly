import React from "react";


export const HourlySection = React.createClass({
  displayHourlyWeatherSection() {
    let displaySection = [];
    if (this.props.hourlyWeather) {
      this.props.hourlyWeather.map((e, index) => {
        return (displaySection.push(
          <ul className={e.props.children.type} key={index}>
            <h4>{index}:00</h4>
            <li>Temp: {e.props.children.temp}</li>
            <li>Condition: {e.props.children.type}</li>
          </ul>
        ))
      })
    }

    if (this.props.currentDay) {
      return (
        <section>
          <aside>
            <h2 className="hourly-section-title">DATE: {this.props.currentDay}</h2>
            <p>(Hourly weather)</p>
          </aside>
          <aside className="twenty-four-hour-weather">
            {displaySection}
          </aside>
        </section>)
    }
  },

  render() {
    return(
        <article className="hourly-section">{this.displayHourlyWeatherSection()}</article>
    )
  }
})
