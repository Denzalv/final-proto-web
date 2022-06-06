import React from "react";
import "./demo.css";

const Demo = () => {
  return (
    <>
      <div className="demo" id="demoid">
        <section className="demo-text">
          <h1>Demo</h1>
        </section>
        <section className="demo-vid">
          <iframe
            width="600"
            height="355"
            src="https://www.youtube.com/embed/SF-_47-oCtk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default Demo;
