import test2 from './location.png'
import {Title} from "../../ui/Title/Title.tsx";
import styles from './styles.module.css'
import { Button } from "../../ui/Button/Button.tsx";

export const Location = () => {

    return (
      <div className={styles.wrapper}>
        <div className={styles.title_container}>
          <Title variant={'filled'} rotate={'left'}>
            МЕСТО СВАДЬБЫ
          </Title>
        </div>

        <div className={styles.content_wrapper}>
          <img src={test2} alt="test2" className={styles.photo_container} />

          <div className={styles.text_container}>
            <div>
              <div className={styles.text}>
                Усадьба "La Villa"
              </div>
              <div className={styles.text}>
                д.Новинка, ул.Центральная 17
              </div>
              <div className={styles.text}>
                (Дзержинский район, возле Фаниполя)
              </div>
            </div>

            <Button href={'https://yandex.by/maps/-/CHCeVPiN'}>
              НА КАРТЕ
            </Button>
          </div>
        </div>
      </div>
    );
};