import React, { useState } from "react";
import BalTrain from "../../img/BalTrain.jpg";
import Canteen from "../../img/Canteen.jpg";
import Cricket from "../../img/Cricket.jpg";
import Pandas from "../../img/Pandas.jpg";

const serviceBoxStyle = {
  container: {
    width: "100%",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
    padding: "15px",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    transition: "transform 0.3s",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#006400",
    fontFamily: "Trebuchet MS, sans-serif",
    marginTop: "10px",
  },
  date: {
    fontSize: "14px",
    color: "#555",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
    color: "red",
    fontStyle: "italic",
    fontSize: "16px",
  },
  hover: {
    transform: "scale(1.05)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  hoverImage: {
    transform: "scale(1.1)",
  },
};

function ServiceBox({ image, title, date, description, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...serviceBoxStyle.container,
        ...(isHovered ? serviceBoxStyle.hover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        style={{
          ...serviceBoxStyle.image,
          ...(isHovered ? serviceBoxStyle.hoverImage : {}),
        }}
      />
      <h3 style={serviceBoxStyle.title}>{title}</h3>
      <div style={serviceBoxStyle.date}>
        <i className="fa fa-calendar"></i>&nbsp; {date}
      </div>
      <p style={serviceBoxStyle.description}>{description}</p>
      <a style={serviceBoxStyle.link} href={link}>
        Read More&nbsp; <i className="fa fa-caret-right"></i>
      </a>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      image: BalTrain,
      title: "Bal Train",
      date: "April 30, 2018",
      description:
        "New Bal Rail is now operative (with effect from 28th February 2014) in Lucknow Zoo.",
      link: "BalTrain.html",
    },
    {
      image: Canteen,
      title: "Canteen Services",
      date: "August 19, 2018",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae.",
      link: "CanteenService.html",
    },
    {
      image: Cricket,
      title: "Cricket",
      date: "May 28, 2019",
      description:
        "Cricket is a sport which is played between two teams of eleven players each. One team.",
      link: "CricketNews.html",
    },
    {
      image: Pandas,
      title: "Animal Adoption",
      date: "June 26, 2020",
      description:
        "Since the COVID-19 outbreak, many public spaces have been closed.",
      link: "AnimalAdoption.html",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1 className="service-heading">Zoo Services</h1>
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {services.map((service, index) => (
          <div key={index} className="col-3" style={{ flex: "1 1 23%" }}>
            <ServiceBox
              image={service.image}
              title={service.title}
              date={service.date}
              description={service.description}
              link={service.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
