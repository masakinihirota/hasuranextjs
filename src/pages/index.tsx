import { useQuery } from "@apollo/client";
import type { NextPage } from "next";

// 自分が書いたquery
import { MY_QUERY } from "../queries/posts";

// 自動生成されたquery
import { MyQueryQuery } from "../generated/graphql";

const Home: NextPage = () => {
  const { data, error } = useQuery<MyQueryQuery>(MY_QUERY);
  return (
    <div>
      {data?.posts.map((post) => (
        <div key={`post-${post.id}`}>
          {post.id} {post.title}
          <br />
          {post.content}
        </div>
      ))}
    </div>
  );
};

export default Home;
