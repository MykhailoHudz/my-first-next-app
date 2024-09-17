import styles from "./TeamSection.module.scss";
import generalStyles from "../../app/styles/page.module.scss";
import DeveloperCard from "../DeveloperCard/DeveloperCard";

const TEAM_MEMBERS = [
  {
    name: "Mykhailo Hudz",
    position: "Trainee Software Engineer",
    photoURL: "/images/developer_photo.jpg",
  },
  {
    name: "Ivan Nazarenko",
    position: "Middle Software Engineer",
    photoURL: "/images/developer_photo.jpg",
  },
];

function TeamSection() {
  return (
    <section className={generalStyles.section}>
      <div className={styles.team_container}>
        <h1 className={generalStyles.main_title}>Our Team</h1>
        <ul className={styles.members_list}>
          {TEAM_MEMBERS.map((member, i) => (
            <DeveloperCard
              photoURL={member.photoURL}
              name={member.name}
              position={member.position}
              key={i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TeamSection;
