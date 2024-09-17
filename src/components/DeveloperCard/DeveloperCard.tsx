import Image from "next/image";
import styles from "./DeveloperCard.module.scss";

type TypeDeveloperCardProps = {
  photoURL: string;
  name: string;
  position: string;
};

function DeveloperCard({ photoURL, name, position }: TypeDeveloperCardProps) {
  return (
    <li className={styles.member_item}>
      <div className={styles.photo_container}>
        <Image
          src={photoURL}
          alt="a young guy with dark hair in a white t-shirt"
          className={styles.photo}
          width={190}
          height={250}
          priority={true}
        />
      </div>
      <h2 className={styles.developer_title}>{name}</h2>
      <p className={styles.developer_position}>{position}</p>
    </li>
  );
}

export default DeveloperCard;
