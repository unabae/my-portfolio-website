import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import { CONTENT } from "./data.js";
import { projects } from "./data.js";
import { LampDemo } from "./components/ui/lamp";
import { HoverEffect } from "./components/ui/card-hover-effects";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Body
        srcImage={CONTENT[0].srcImage}
        title={CONTENT[0].title}
        content={CONTENT[0].content}
      />
      <Body
        srcImage={CONTENT[1].srcImage}
        title={CONTENT[1].title}
        content={CONTENT[1].content}
      />
      <Body
        srcImage={CONTENT[2].srcImage}
        title={CONTENT[2].title}
        content={CONTENT[2].content}
      />
      <LampDemo />
      <HoverEffect items={projects} />
      <Analytics />
    </>
  );
}

export default App;
