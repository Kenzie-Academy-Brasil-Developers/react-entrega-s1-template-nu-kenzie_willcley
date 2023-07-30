import styles from "./style.module.scss";
import { Form } from "../Form";
import { TotalBalance } from "../TotalBalance";

export const FormSection = ({ balanceList, addBalance }) => {
  return (
    <section className={styles.container}>
      <Form addBalance={(balanceList, addBalance)} />
      <TotalBalance balanceList={balanceList} />
    </section>
  );
};
