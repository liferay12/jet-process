import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import ThemeRender from "./theme/component/ThemeRender";
import sideNavJSON from "./json-data/LeftNavigation";
import { useEffect } from "react";
import { W3Crm } from "./theme/js/custom";
import { EmailService } from "./theme/Service/EmailService";
import Home from "./component/Home";
import topbarJSON from "./json-data/TopbarConfig"

import toast, { Toaster } from 'react-hot-toast';

function App() {
  EmailService.email = localStorage.getItem("email");
  EmailService.name = "Ashwani rao";
  const notify = () => toast.success('Here is your toast.');
  return (

    <>
      <Toaster position="left" reverseOrder={false} />
      <ThemeRender sideBarJSON={sideNavJSON} topbarJSON={topbarJSON}></ThemeRender>;
    </>

  );
}

export default App;
