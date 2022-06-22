import { FC } from "react";
import Card from "../../componets/card/card";
import styles from "./Home.module.css";
import DataProducts from "../../assets/data";

const HomePageComponent: FC = () => {
  return (
    <div className={styles.main}>
      {DataProducts.map((p) => {
        return <Card key={p.id} product={p} />;
      })}
    </div>
  );
};

export default HomePageComponent;
