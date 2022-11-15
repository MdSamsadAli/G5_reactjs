import React from "react";
import { About } from "./Components/About/About";
import { Clients } from "./Components/Clients/Clients";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Questions } from "./Components/Frequent/Questions";
import { Header } from "./Components/Header/Header";
import { Hello } from "./Components/Hello/Hello";
import { Pricing } from "./Components/Pricing/Pricing";
import { Progress } from "./Components/Progress/Progress";
import { Service } from "./Components/Services/Service";
import { Teams } from "./Components/Teams/Teams";
import { Work } from "./Components/Work/Work";

const App = () => {
  return (
    <div>
      <Header />
      <Service />
      <About />
      <Pricing />
      <Work />
      <Progress />
      <Questions />
      <Clients />
      <Hello />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
