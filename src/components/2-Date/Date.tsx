import styles from "./styles.module.css";
import test from './couple_in_heart.png'
import hands from './hands.png'
import { Title } from "../../ui/Title/Title.tsx";

export const Date = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title_container}>
          <Title variant={'filled'} rotate={'left'}>
            ДОРОГИЕ
          </Title>
          <Title variant={'filled'} rotate={'right'}>
            ДРУЗЬЯ И РОДНЫЕ!
          </Title>
        </div>

        <div className={styles.text}>
          Совсем скоро наступит день, который будет для нас особенным - ДЕНЬ НАШЕЙ СВАДЬБЫ!
          Мы будем счастливы оказаться в окружении близких нам людей, поэтому приглашаем вас разделить с нами этот
          важный день!
        </div>

        <img className={styles.rings} src={hands} alt={''} />


        <Title variant={'filled'} rotate={'right'}>
          НАШ ДЕНЬ
        </Title>

        <div className={`${styles.photo_container} ${styles.rotate_right}`}>
          <img className={styles.image} src={test} alt={''} />
        </div>

        <Title variant={'filled'} rotate={'right'}>
          13 ИЮЛЯ
        </Title>
      </div>
    );
};