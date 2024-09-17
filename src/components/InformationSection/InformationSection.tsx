import styles from "./InformationSection.module.scss";
import generalStyles from "../../app/styles/page.module.scss";

function InformationSection() {
  return (
    <section className={generalStyles.section}>
      <div className={styles.information_container}>
        <h1 className={generalStyles.main_title}>Routing information</h1>
        <ul className={styles.information_list}>
          <li>
            <h2>Title 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              facere, corrupti soluta architecto dolores, libero incidunt,
              eveniet dolorem mollitia dolore cumque exercitationem. Quae cum
              ullam voluptas, adipisci aperiam voluptatum alias! Itaque quisquam
              voluptatibus quasi libero non assumenda alias placeat
              reprehenderit officia voluptatem eligendi, commodi reiciendis
              asperiores aliquam ipsa adipisci sequi! Odit architecto,
              repellendus voluptas maiores ut possimus? Perspiciatis, totam
              harum. Dolor mollitia dolore repudiandae error? Nulla, sequi,
              animi eveniet quasi id nisi hic est voluptatem, dicta quaerat
              tenetur voluptate excepturi quae unde. Cupiditate obcaecati nulla
              nesciunt? Cupiditate itaque iure error!
            </p>
          </li>
          <li>
            <h2>Title 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              facere, corrupti soluta architecto dolores, libero incidunt,
              eveniet dolorem mollitia dolore cumque exercitationem. Quae cum
              ullam voluptas, adipisci aperiam voluptatum alias! Itaque quisquam
              voluptatibus quasi libero non assumenda alias placeat
              reprehenderit officia voluptatem eligendi, commodi reiciendis
              asperiores aliquam ipsa adipisci sequi! Odit architecto,
              repellendus voluptas maiores ut possimus? Perspiciatis, totam
              harum. Dolor mollitia dolore repudiandae error? Nulla, sequi,
              animi eveniet quasi id nisi hic est voluptatem, dicta quaerat
              tenetur voluptate excepturi quae unde. Cupiditate obcaecati nulla
              nesciunt? Cupiditate itaque iure error!
            </p>
          </li>
          <li>
            <h2>Title 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              facere, corrupti soluta architecto dolores, libero incidunt,
              eveniet dolorem mollitia dolore cumque exercitationem. Quae cum
              ullam voluptas, adipisci aperiam voluptatum alias! Itaque quisquam
              voluptatibus quasi libero non assumenda alias placeat
              reprehenderit officia voluptatem eligendi, commodi reiciendis
              asperiores aliquam ipsa adipisci sequi! Odit architecto,
              repellendus voluptas maiores ut possimus? Perspiciatis, totam
              harum. Dolor mollitia dolore repudiandae error? Nulla, sequi,
              animi eveniet quasi id nisi hic est voluptatem, dicta quaerat
              tenetur voluptate excepturi quae unde. Cupiditate obcaecati nulla
              nesciunt? Cupiditate itaque iure error!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default InformationSection;
