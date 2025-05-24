import { Form } from "./components/6-Form/Form";
import {Main } from "./components/1-Main/Main.tsx";
import {Location} from "./components/3-Location/Location.tsx";
import styles from  './styles.module.css'
import {Date} from "./components/2-Date/Date.tsx";
import {Timing} from "./components/4-Timing/Timing.tsx";
import { DressCode } from "./components/5-DressCode/DressCode.tsx";
import { Footer } from "./components/8-Footer/Footer.tsx";
import { Details } from "./components/7-Details/Details.tsx";


const App = () => (
  <div className={styles.wrapper}>
      <div className={styles.container}>
          <Main/>
          <Date/>
          <Location/>
          <Timing/>
          <DressCode/>
          <Form/>
          <Details/>
        <Footer />
      </div>
  </div>
);

export default App;
