import Image from "next/image";
import cs from "classnames";

import styles from "./card.module.css";
import Link from "next/link";
import { CardHandler } from "./card.props";
import { useState } from "react";

const enum SelectState {
  Normal = "Normal",
  Active = "Active",
  Disabled = "Disabled",
}

const Card = ({ product }: CardHandler): JSX.Element => {
  const [activeSelected, setActiveSelected] = useState(false);
  const [selected, setSelected] = useState(() =>
    !product.disable ? SelectState.Normal : SelectState.Disabled
  );

  const handleClick = () => {
    if (product.disable) return;
    setActiveSelected(!activeSelected);
  };

  const handleMouseLeave = () => {
    if (product.disable) return;

    if (!activeSelected) {
      setSelected(SelectState.Normal);
    }

    if (activeSelected) {
      switch (selected) {
        case SelectState.Normal: {
          setSelected(SelectState.Active);
          break;
        }

        case SelectState.Active: {
          setSelected(SelectState.Normal);
          break;
        }
      }
    }
  };

  return (
    <div
      className={styles.container}
      onClick={() => handleClick()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div
        className={cs(styles.cardBorder, {
          [styles.cardBorderActive]: selected === SelectState.Active,
          [styles.cardBorderDisabled]: selected === SelectState.Disabled,
        })}
      >
        <div
          className={cs(styles.card, {
            [styles.cardDisabled]: selected === SelectState.Disabled,
          })}
        >
          <h3>Сказочное заморское яство</h3>
          <h2>Нямушка</h2>
          <p>{product.title}</p>
          <ul>
            {product.listOptions.map((option) => {
              return <li key={option.id}>{option.title}</li>;
            })}
          </ul>

          <div
            className={cs(styles.cardImage, {
              // [styles.cardDisabled]: selected === SelectState.Disabled,
            })}
          >
            <Image
              src={"/card/photo.png"}
              alt="cat"
              width={320}
              height={272}
              layout="fixed"
            />
          </div>

          <div
            className={cs(styles.round, {
              [styles.roundActive]: selected === SelectState.Active,
              [styles.roundDisabled]: selected === SelectState.Disabled,
            })}
          >
            <span>{product.weight}</span>
            <span>{product.weightSymbol}</span>
          </div>
        </div>
      </div>

      {selected === SelectState.Normal && (
        <div className={styles.bottom}>
          Чего сидишь? Порадуй котэ,
          <Link href="/">
            <a>
              <span>купи.</span>
            </a>
          </Link>
        </div>
      )}

      {selected === SelectState.Active && (
        <div className={styles.bottom}>{product.description}</div>
      )}

      {selected === SelectState.Disabled && (
        <div className={[styles.bottom, styles.bottomDisabled].join(" ")}>
          {`Печалька, с ${product.title} закончился`}
        </div>
      )}
    </div>
  );
};

export default Card;
