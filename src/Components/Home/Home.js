import React from "react";
import ZooGate from "../../img/Zoogate.jpg";
import NwesAndUpdate from "../../GlobalComponents/NewsAndUpdate/NewsAndUpdate";
import NewsAndUpdate from "../../GlobalComponents/NewsAndUpdate/NewsAndUpdate";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="mainheading">
            Welcome to Lucknow Zoological Garden...
          </div>
          <div className="data-area">
            <img className="zoo-gate" src={ZooGate} alt="Zoo Gate" />
            <p>
              It was established in the year 1921 to commemorate the visit of
              His Royal Highness, the Prince of Wales to Lucknow and was known
              as “The Prince of Wales Zoological Gardens”. Its name was changed
              to “Lucknow Prani Udyan” in 2001. Again, its name is changed to
              “Nawab Wazid Ali Shah Prani Udyan, Lucknow” in 2015. It is
              situated in 29 hectares area in the heart of the city. It houses
              around 1000 animals of more than 100 species. Around 11-12 lacs
              visitors visit the zoo every year.
            </p>
            <p>
              The Prince of Wales Zoological Gardens, popularly known as Nawab
              Wajid Ali Shah Zoological Garden, was established in the year 1921
              to commemorate the visit of His Royal Highness, the Prince of
              Wales to Lucknow. The idea of establishing Zoological gardens at
              Lucknow emanated from Sir Harcourt Butler, the then Governor of
              the State, and it was received enthusiastically by the prominent
              landlords and the leading citizens of the State who donated
              liberally for the construction of animal houses and cages and also
              presented animals and birds for display from time to time.{" "}
              <span>
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "12px",
                  }}
                  href="About Zoological Garden.html"
                >
                  <i className="fa fa-book"></i>&nbsp;Read More...
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="col-4">
          <NewsAndUpdate />
        </div>
      </div>
      <Services />
    </>
  );
}
