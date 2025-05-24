import styles from './styles.module.css'
import {TimingBlock} from "./TimingBlock/TimingBlock.tsx";
import ss from './1.png'
import first from './3.png'
import second from './4.png'
import third from './5.png'
import four from './6.png'
import five from './7.png'

export const Timing = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title_container}>
                <div className={`${styles.title} ${styles.rotate_left}`}>
                    СВАДЕБНАЯ
                </div>

                <div className={`${styles.title} ${styles.rotate_right}`}>
                    ПРОГРАММА
                </div>
            </div>

            <div className={styles.timing_container}>
              <img src={ss} className={styles.time_image}/>
                {/*<TimingBlock imagePath={first} time={'15:30'} title={'Сбор гостей'} />*/}
                {/*<TimingBlock imagePath={second} time={'16:15'} title={'Торжественная \n церемония'} />*/}
                {/*<TimingBlock imagePath={third} time={'17:15'} title={'Банкет'} />*/}
                {/*<TimingBlock imagePath={four} time={'18:30'} title={'Фотосессия'} />*/}
                {/*<TimingBlock imagePath={five} time={'00:00'} title={'Завершение вечера'} />*/}
            </div>

        </div>
    );
};