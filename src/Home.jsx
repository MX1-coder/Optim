import React from "react";
import Heading from "./Heading";
import Homebanner from "./Homebanner";
import Tabs from "./Tabs";
import Footer from "./Footer";
import Myhome  from "./component/pages/Myhome";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="App"> 
      <Heading />
      <Homebanner />
<Myhome />
      <Footer />
    </div>
  );
}

export default Home;
