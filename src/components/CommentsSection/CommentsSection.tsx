import styles from "./CommentsSection.module.scss";
import generalStyles from "../../app/styles/page.module.scss";
import CommentsListItem from "../CommentsListItem/CommentsListItem";
import { commentsFilterBySymbols, TypeComment } from "./utils/commentsFilter";

async function CommentsSection() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();

    // Function  > 40(symbols) ? show : hide

    return (
        <section className={generalStyles.section}>
            <div className={styles.comments_container}>
                <h1 className={generalStyles.main_title}>Comments</h1>
                <ul className={styles.comments_list}>
                    {commentsFilterBySymbols(data)?.map(
                        (comment: TypeComment) => (
                            <CommentsListItem
                                id={comment.id}
                                body={comment.body}
                                key={comment.id}
                            />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
}

export default CommentsSection;
