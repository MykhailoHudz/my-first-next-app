import styles from "./CommentsListItem.module.scss";

function CommentsListItem({ id, body }: { id: number; body: string }) {
  return (
    <li>
      <p>
        <span className={styles.list_number}>{id}.&nbsp;</span>
        {body.slice(0, 150) + "..."}
      </p>
    </li>
  );
}

export default CommentsListItem;
