import React, { Component } from "react";
import Helmet from "react-helmet";
import "./GoogleMaps.scss";
import { MAP_STYLES } from "./MapThemes/StandardTheme";

class GoogleMaps extends Component {
  componentDidMount() {
    this.renderMap();
  }
  renderMap = () => {
    window.initMap = this.initMap;
  };
  initMap = () => {
    let latitude = 40.674;
    let longitude = -73.945;
    const map = new window.google.maps.Map(
      document.getElementById("google-map"),
      {
        center: new window.google.maps.LatLng(latitude, longitude),
        zoom: 10,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        draggable: true,
        gestureHandling: "cooperative",
        styles: MAP_STYLES
      }
    );
  };
  render() {
    return (
      <section className="map-wrapper-container">
        <div className="map-top-container">
          <h2>Google Map</h2>
          <span>Location at your fingertips</span>
        </div>
        <div className="map-wrapper">
          <div className="map-container" id="google-map"></div>
          <Helmet>
            <script
              type="text/javascript"
              charset="UTF-8"
              async={true}
              defer={true}
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGRJqHDswsAwtWVNJMLfgd8wTXSKXbEYY&callback=initMap"
            />
          </Helmet>
        </div>
      </section>
    );
  }
}

export default GoogleMaps;
