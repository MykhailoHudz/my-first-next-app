import styles from "./CommentsSection.module.scss";
import generalStyles from "../../app/styles/page.module.scss";
import CommentsListItem from "../CommentsListItem/CommentsListItem";

type TypeComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

async function CommentsSection() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  const comments = data.slice(0, 30);

  return (
    <section className={generalStyles.section}>
      <div className={styles.comments_container}>
        <h1 className={generalStyles.main_title}>Comments</h1>
        <ul className={styles.comments_list}>
          {comments?.map((comment: TypeComment) => (
            <CommentsListItem id={comment.id} body={comment.body} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CommentsSection;
