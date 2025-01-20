import React from "react";

export default function NewsAndUpdate() {
  const newsItems = [
    "Online Submission for Painting Competition Till June 2022.",
    "We are open until 5:30 PM. Last entry is 1 hour before closing.",
    "Our team surely helps you to discover great things about our animals.",
  ];

  return (
    <div className="news-div">
      <div className="news-heading">NEWS & UPDATES</div>
      <div className="marquee-container">
        <ul className="marquee-content">
          {newsItems.map((item, index) => (
            <li key={index} className="news-item">
              {item}
              {index < newsItems.length - 1 && <hr />}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .news-div {
          margin-top: 5px;
          margin-bottom: 5px;
          height: 150px;
          border: 1px solid;
          margin-right: 10px;
          background: linear-gradient(rgb(12, 12, 12), rgb(8, 75, 53));
          border-radius: 10px;
          color: white;
          font-family: Arial, sans-serif;
          font-size: 10px;
          position: relative;
          overflow: hidden;
        }

        .news-heading {
          font-size: 12px;
          text-decoration: underline;
          color: yellow;
          text-align: center;
          margin-bottom: 5px;
        }

        .marquee-container {
          height: 120px;
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          animation: scrollUp 5s linear infinite;
          list-style-type: none;
          padding: 15px;
          margin: 0;
          list-style-type: circle;
        }

        .news-item {
          padding: 10px 0;
          cursor: pointer;
        }

        .news-item:hover {
          color: lightyellow;
        }

        hr {
          border: 0.5px solid white;
          margin: 5px 0;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        /* Pause animation on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
