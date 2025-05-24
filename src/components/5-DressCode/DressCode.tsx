import { Title } from '../../ui/Title/Title';
import styles from './styles.module.css'
import men1 from './men_1.png'
import men2 from './men_2.png'
import men3 from './men_3.png'
import men4 from './men_4.png'
import women1 from './women_1.png'
import women2 from './women_2.png'
import women3 from './women_3.png'
import women4 from './women_4.png'
import women5 from './women_5.png'
import { PaletteBlock } from "./PaletteBlock/PaletteBlock.tsx";

export const DressCode = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title_container}>
          <Title variant={'filled'} rotate={'left'}>
            DRESS CODE
          </Title>
        </div>

        <div className={styles.text}>
          <div>
            Мы уверены, что вы будете выглядеть потрясающе в любом наряде!
          </div>
          <div>
            Мы не настаиваем, но было бы здорово, если бы вы придерживались выбранных нами цветов.
            Просим воздержаться от ярких цветов, броских принтов и полностью белых нарядов!
          </div>
        </div>

        <div className={styles.photo_container}>
          <div className={styles.photos_row}>
            <img src={men1} alt={''} className={styles.photo} />
            <img src={men2} alt={''} className={styles.photo} />
            <img src={men3} alt={''} className={styles.photo} />
            <img src={men4} alt={''} className={styles.photo} />
          </div>
        </div>

        <div className={styles.pallete_container}>
          <PaletteBlock color={'#ECE3D2'} />
          <PaletteBlock color={'#E3D3C7'} />
          <PaletteBlock color={'#DECBC5'} />
          <PaletteBlock color={'#856A57'} />
          <PaletteBlock color={'#67563A'} />
          <PaletteBlock color={'#000000'} />
          <PaletteBlock color={'#AEBFA4'} />
          <PaletteBlock color={'#708838'} />
          <PaletteBlock color={'#486933'} />

        </div>

        <div className={styles.photo_container}>
          <div className={styles.photos_row}>
            <img src={women2} alt={''} className={styles.photo} />
            <img src={women3} alt={''} className={styles.photo} />
            <img src={women1} alt={''} className={styles.photo} />
            <img src={women4} alt={''} className={styles.photo} />
          </div>
        </div>


      </div>
    );
};