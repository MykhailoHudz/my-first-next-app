import { commentsFilterBySymbols } from "../commentsFilter";

test("should filter comments with up to than 120 symbols", () => {
  const unfilteredComments = [
    {
      postId: 26,
      id: 130,
      name: "quod est non quia doloribus quam deleniti libero",
      email: "Trevion_Kuphal@bernice.name",
      body: "dicta sit culpa molestiae quasi at voluptate eos\ndolorem perferendis accusamus rerum expedita ipsum quis qui\nquos est deserunt\nrerum fuga qui aliquam in consequatur aspernatur",
    },
    {
      postId: 27,
      id: 131,
      name: "voluptas quasi sunt laboriosam",
      email: "Emmet@guy.biz",
      body: "rem magnam at voluptatem\naspernatur et et nostrum rerum\ndignissimos eum quibusdam\noptio quod dolores et",
    },
    {
      postId: 27,
      id: 132,
      name: "unde tenetur vero eum iusto",
      email: "Megane.Fritsch@claude.name",
      body: "ullam harum consequatur est rerum est\nmagni tenetur aperiam et\nrepudiandae et reprehenderit dolorum enim voluptas impedit\neligendi quis necessitatibus in exercitationem voluptatem qui",
    },
    {
      postId: 27,
      id: 133,
      name: "est adipisci laudantium amet rem asperiores",
      email: "Amya@durward.ca",
      body: "sunt quis iure molestias qui ipsa commodi dolore a\nodio qui debitis earum\nunde ut omnis\ndoloremque corrupti at repellendus earum eum",
    },
    {
      postId: 27,
      id: 134,
      name: "reiciendis quo est vitae dignissimos libero ut officiis fugiat",
      email: "Jasen_Rempel@willis.org",
      body: "corrupti perspiciatis eligendi\net omnis tempora nobis dolores hic\ndolorum vitae odit\nreiciendis sunt odit qui",
    },
    {
      postId: 27,
      id: 135,
      name: "inventore fugiat dignissimos",
      email: "Harmony@reggie.com",
      body: "sapiente nostrum dolorem odit a\nsed animi non architecto doloremque unde\nnam aut aut ut facilis\net ut autem fugit minima culpa inventore non",
    },
  ];

  const expectedFilteredComments = [
    {
      postId: 27,
      id: 131,
      name: "voluptas quasi sunt laboriosam",
      email: "Emmet@guy.biz",
      body: "rem magnam at voluptatem\naspernatur et et nostrum rerum\ndignissimos eum quibusdam\noptio quod dolores et",
    },
    {
      postId: 27,
      id: 134,
      name: "reiciendis quo est vitae dignissimos libero ut officiis fugiat",
      email: "Jasen_Rempel@willis.org",
      body: "corrupti perspiciatis eligendi\net omnis tempora nobis dolores hic\ndolorum vitae odit\nreiciendis sunt odit qui",
    },
  ];

  expect(commentsFilterBySymbols(unfilteredComments)).toEqual(
    expectedFilteredComments
  );
});
