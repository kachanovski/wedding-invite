import styles from './styles.module.css'
import img from './59.jpg'
import { Title } from "../../ui/Title/Title.tsx";
export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title_container}>
                <Title variant={'white'} rotate={'left'}>
                    ЖДЕМ ВАС
                </Title>

                <Title variant={'white'} rotate={'right'}>
                    НА НАШЕЙ СВАДЬБЕ
                </Title>
            </div>
        </div>
    );
};