import React from "react";
import "./Checkbox.scss";

export default function Checkbox() {
  return (
    <div className="checkbox_area">
      <h4>Caractéristiques</h4>

      <div className="checkbox_wrapper">
        <label className="">
          <input type="checkbox" name="Garden-2" id="Garden-2" />
          <div className="checkbox checked"></div>
          <span className="asdf" for="Garden-2">
            Skipper
          </span>{" "}
        </label>
        <label>
          <input
            type="checkbox"
            name="Security-Cameras-2"
            id="Security-Cameras-2"
          />
          <div className="checkbox checked"></div>
          <span for="Security-Cameras-2">Paddle</span>{" "}
        </label>
        <label>
          <input type="checkbox" name="Laundry-2" id="Laundry-2" />
          <div className="checkbox checked"></div>
          <span for="Laundry-2">Eau courante</span>{" "}
        </label>
        <label>
          <input type="checkbox" name="Internet-2" id="Internet-2" />
          <div className="checkbox checked"></div>
          <span for="Internet-2">Draps</span>{" "}
        </label>
        <label>
          <input type="checkbox" name="Pool-2" id="Pool-2" />
          <div className="checkbox checked"></div>
          <span for="Pool-2">VHF</span>{" "}
        </label>
        <label>
          <input
            type="checkbox"
            name="Video-Surveillance-2"
            id="Video-Surveillance-2"
          />
          <div className="checkbox checked"></div>
          <span for="Video-Surveillance-2">GPS</span>{" "}
        </label>
        <label>
          <input type="checkbox" name="Jacuzzi-2" id="Jacuzzi-2" />
          <div className="checkbox checked"></div>
          <span for="Jacuzzi-2">Douche</span>{" "}
        </label>
        <label>
          <input type="checkbox" name="Elevator-2" id="Elevator-2" />
          <div className="checkbox checked"></div>
          <span for="Elevator-2">WC</span>{" "}
        </label>
        <label>
          <input type="checkbox" name="Vigilance-2" id="Vigilance-2" />
          <div className="checkbox checked"></div>
          <span for="Vigilance-2">Equipement</span>{" "}
        </label>
        <label>
          <input type="checkbox" name="Dish-Washer-2" id="Dish-Washer-2" />
          <div className="checkbox checked"></div>
          <span for="Dish-Washer-2">Cuisine</span>{" "}
        </label>
        <label>
          <input type="checkbox" name="Solar-Panel-2" id="Solar-Panel-2" />
          <div className="checkbox checked"></div>
          <span for="Solar-Panel-2">Solar panel</span>{" "}
        </label>
        <label>
          <input type="checkbox" name="Garage-2" id="Garage-2" />
          <div className="checkbox checked"></div>
          <span for="Garage-2">Garage</span>
        </label>
      </div>
    </div>
  );
}
