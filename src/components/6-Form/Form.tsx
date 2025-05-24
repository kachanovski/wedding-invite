import styles from "./styles.module.css";
import { Button } from "../../ui/Button/Button.tsx";
import { Title } from "../../ui/Title/Title.tsx";

export const Form = () => {// const doc = new GoogleSpreadsheet(credentials.sheet_id, serviceAccountAuth);
    return (
      <div className={styles.wrapper}>
        <div className={styles.title_container}>
          <Title rotate={'right'} variant={'filled'}>
            АНКЕТА ДЛЯ ГОСТЕЙ
          </Title>
        </div>

        <div className={styles.text}>
          Пожалуйста, подтвердите свое присутствие до 10.06.2025 и заполните анкету по кнопке ниже, чтобы мы смогли учесть ваши пожелания.
        </div>


        <Button
          href="https://forms.gle/EuY6ygwQuFdiKmSy8">
          Заполнить анкету
        </Button>

      </div>
    );
};