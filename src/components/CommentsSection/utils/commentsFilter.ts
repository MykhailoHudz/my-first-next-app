export type TypeComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export function commentsFilterBySymbols(commentsArr: TypeComment[]) {
  return commentsArr.filter(
    (comment: TypeComment) => comment.body.length < 110
  );
}
