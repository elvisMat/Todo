import React from "react";
import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";
import todoImg from "/todo.svg";
import sleepImg from "/sleep.svg";
import timetableImg from "/timetable.svg";
import gamesImg from "/games.svg";
import Section from "../components/Section";
function Home() {
  return (
    <>
      <AppBar />
      <div className="page home">
        <div className="hero">
          <div className="hero-header">A collection of tools</div>
          <div className="hero-sub-header">
            This website is a collection of tools created using react, this
            project was created on my spare time, hope you enjoy
          </div>
        </div>
        <Section id={"todo"} title="Todo app" isImgLeft src={todoImg}>
          A user-friendly to-do app with an integrated calendar feature.
          Seamlessly merge your daily tasks with your schedule as you
          effortlessly input and organize your to-dos directly onto the calendar
          interface. Experience the convenience of a single platform that
          empowers you to efficiently plan, track, and accomplish your goals,
          all while staying on top of your commitments{" "}
          <Link to={"/todo"}>view</Link>
        </Section>
        <Section id="sleep-calculator" title="Sleep Calculator" src={sleepImg}>
          If you're yearning for a revitalizing night's sleep without the
          sensation of being run over, it's time to explore the wonders of the
          sleep calculator. Bid farewell to mornings that leave you feeling like
          you've been hit by a train, as this innovative tool tailors your sleep
          duration to ensure you wake up refreshed and ready to conquer the day.{" "}
          <Link to={"/todo"}>view</Link>
        </Section>
        <Section title="Timetable Creator" isImgLeft src={timetableImg}>
          Crafting your ideal timetable has never been easier with our intuitive
          timetable creator. Design a streamlined schedule that suits your
          routine, complete with all your important activities. Plus, you can
          conveniently export your timetable in both PDF and PNG formats,
          ensuring compatibility and flexibility for sharing and printing.{" "}
          <Link to={"/todo"}>view</Link>
        </Section>
        <Section title="Games" src={gamesImg}>
          Immerse yourself in a diverse world of entertainment as you explore
          and enjoy our extensive collection of games.Embark on exciting
          journeys, challenge your skills, and unlock endless hours of fun as
          you delve into our wide range of games, promising an unforgettable
          gaming experience for players of all tastes and ages.{" "}
          <Link to={"/todo"}>view</Link>
        </Section>
      </div>
    </>
  );
}

export default Home;
