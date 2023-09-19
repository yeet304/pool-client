import { Link, Outlet } from "react-router-dom";
import { useState } from 'react';

function SVGBackground() {
  return (
    <>
      <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                    @keyframes rotate {\n                             0% {\n                            transform: rotate(0deg);\n                        }\n                        100% {\n                            transform: rotate(360deg);\n                        }\n                    }\n                    .out-top {\n                        animation: rotate 20s linear infinite;\n                        transform-origin: 13px 25px;\n                    }\n                    .in-top {\n                        animation: rotate 10s linear infinite;\n                        transform-origin: 13px 25px;\n                    }\n                    .out-bottom {\n                        animation: rotate 25s linear infinite;\n                        transform-origin: 84px 93px;\n                    }\n                    .in-bottom {\n                        animation: rotate 15s linear infinite;\n                        transform-origin: 84px 93px;\n                    }\n                "
            }}
          />
        </defs>
        <path
          fill="#90E0EF"
          className="out-top"
          d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
        />
        <path
          fill="#00B4D8"
          className="in-top"
          d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
        />
        <path
          fill="#90E0EF"
          className="out-bottom"
          d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
        />
        <path
          fill="#0077B6"
          className="in-bottom"
          d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
        />
      </svg>
    </>
  )
}

function PoolTitle() {
  return (
    <div className="pool-title">
      <h1>
        <Link to="/">pool</Link>
      </h1>
    </div>
  )
}

function HowItWorks() {
  return (
    <section>
      <div className="content" id="how-it-works">
        <div className="box">
          <h2>How it works</h2>
          <ol>
            <li>Enter your departure schedule</li>
            <li>
              Get paired with your <em>PoolPal</em> via SMS (for higher match rate,
              plan early)
            </li>
            <li>
              Finalize details with your <em>PoolPal</em> and order and split the
              price of a car together
            </li>
            <li>Save money on your trip to the airport. safe travels!</li>
          </ol>
        </div>
        <div className="box">
          <p style={{ fontWeight: 600 }}>
            *Pool does not order your ride-share. we provide the contact information
            of someone who shares your itenerary for you to finalize ride details
            with.
          </p>
        </div>
        {/* <div id="onboard-buttons" style="margin-right: 10px; margin-top: 13px">
          <a href="./signup.html" class="small-button" id="signup-button">sign up</a>
      </div> */}
        <a href="#about-us" className="scroll-link" style={{ bottom: "-110px" }}>
          Our story
          <br />⌄
        </a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section>
      <div className="content" id="about-us">
        <a href="#statement" className="scroll-link" style={{ top: "-170px" }}>
          ^<br />
          Sign up
        </a>
        <div className="box" id="about-us-content">
          <p>
            Save your money for the things you love. <br />
            <br />
            <Link to="/signup">sign up</Link> •{" "}
            <Link to="/account">account</Link>
            <br />
            <a href="#how-it-works">how / what</a> •{" "}
            <Link to="/feedback">feedback</Link> <br />
            <br />
            by Diego Scanlon and Pranav Padmanabhan
            <br />@ UChicago in 2023
          </p>
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <div className="content">
      <div id="statement">
        <h1>Save money on your airport rideshares.</h1>
        <p>
          <b>Share and split rides</b> to and from airports with your classmates
          who have similar travel dates, times, and destinations.
        </p>
      </div>
      <div id="onboard-buttons">
        <Link to="/signup" className="small-button" id="signup-button">
          sign up
        </Link>
        <Link to="/login" className="small-button" id="signin-button">
          log in
        </Link>
      </div>
      <a href="#how-it-works" className="scroll-link">
        How it works
        <br />⌄
      </a>
    </div>
  )
}

export function Plan() {
  const [msg, setMsg] = useState({
    message: 'Hello, world!'
  });

  const refresh = () => {
    fetch('http://localhost:8000/', {
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json())
      .then(body => setMsg({ message: body.message }));
  }

  return (
    <>
      <h2>plan</h2>
      <p>{msg.message}</p>
      <button className="submit-button" onClick={() => refresh()}>refresh</button>
    </>
  )
}

export default function MyApp() {
  return (
    <>
      <SVGBackground />
      <PoolTitle />
      <section>
        <Outlet />
      </ section>
      <HowItWorks />
      <About />
    </>
  );
}
