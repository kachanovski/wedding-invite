import styles from "./styles.module.css";
import { Button } from "../../ui/Button/Button.tsx";
import { Title } from "../../ui/Title/Title.tsx";
import s from './2.png'
export const Details = () => {
    return (
      <div className={styles.wrapper}>

        <Title variant="white" rotate={'left'}>
          ДЕТАЛИ
        </Title>

        <div className={styles.text}>
          От всего сердца просим вас воздержаться от криков "Горько", ведь поцелуй - знак выражения чувств, он не может
          быть по заказу.
        </div>

        <img src={s} style={{ height: 40, width: '80%', maxWidth: 400 }} alt="" />

        <div className={styles.text}>
          Мы будем рады любому подарку, который помещается в конверт (так случилось, что мы очень любим деньги :) )
        </div>

        <img src={s} style={{ height: 40, width: '80%', maxWidth: 400 }} alt="" />

        <div className={styles.text}>
          Только, пожалуйста, не дарите нам цветы. Мы не успеем насладиться их красотой. Вместо них вы можете взять
          бутылочку вашего любимого алкогольного напитка с пожеланием, на какой повод нам ее открыть.
        </div>

        <img src={s} style={{ height: 40, width: '80%', maxWidth: 400 }} alt="" />

        <div className={styles.text}>
          По все вопросам и предложениям вы всегда можете обратиться к нашему прекрасному организатору Анне.
        </div>

        <img src={s} style={{ height: 40, width: '80%', maxWidth: 400 }} alt="" />


        <Button
          href="https://t.me/+375292761451">
          Написать организатору
        </Button>

      </div>
    );
};