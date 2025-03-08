import { useEffect, useState } from "react";
import SpeakupSvg from "../assets/graphics/speakup.svg?react";

type PostData = {
  title: string;
  description: string;
  readable_publish_date: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  positive_reactions_count: number;
  cover_image: string;
  reading_time_minutes: number;
  user: {
    name: string;
    username: string;
    profile_image: string;
    profile_image_90: string;
  };
  tag_list?: string[];
};

interface PostProps {
  post: PostData;
}
function Post({ post }: PostProps) {
  return (
    <div className="flex gap-4 p-4 border border-violet-400 rounded-xl overflow-hidden bg-violet-50">
      <img
        src={post.user.profile_image_90}
        alt={post.user.name}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <a href={post.url} className="text-3xl font-bold text-gray-900">
          {post.title}
        </a>
        <p className="text-gray-700 font-medium">
          {post.user.name} • {post.readable_publish_date}
        </p>
        <p className="text-sm text-gray-600">{post.description}</p>
        <ul className="flex gap-2 text-sm text-violet-600">
          {post.tag_list?.map((t) => (
            <li>
              <a href={`https://dev.to/t/${t}`}>#{t}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PostsSection() {
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PostData[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dev.to/api/articles?tag=wecoded&page=${page}&per_page=10`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [page, setLoading, setData]);

  return (
    <section id="posts">
      <SpeakupSvg className="absolute w-40 -top-20 -right-16 rotate-y-180" />
      <h1 className="font-serif text-4xl font-bold text-violet-800 mb-1">
        Hear the Voices...
      </h1>
      <p className="font-serif text-sm text-gray-800 mb-6 font-semibold">
        of our beloved community, of how they aspire, how they achieve, and how
        they grow.
      </p>
      <div className="flex flex-col gap-4">
        {data.length === 0 ? (
          loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <p className="text-center text-gray-500">No results</p>
          )
        ) : (
          data.map((d) => <Post key={d.url} post={d} />)
        )}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setPage(page - 1)}
            className="text-xl font-semibold px-4 py-2 rounded-full bg-violet-800 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-violet-400 disabled:text-gray-500"
            disabled={page === 1 || loading}
          >
            Prev
          </button>
          <p className="flex justify-center items-center text-xl font-semibold text-violet-800 mx-4 h-11 aspect-square rounded-full bg-violet-200">
            {page}
          </p>
          <button
            onClick={() => setPage(page + 1)}
            className="text-xl font-semibold px-4 py-2 rounded-full bg-violet-800 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-violet-400 disabled:text-gray-500"
            disabled={data.length < 10 || loading}
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex justify-end mt-8 mb-4">
        <a
          href="https://dev.to/t/wecoded"
          className="text-xl font-semibold text-violet-800 underline"
        >
          See all
        </a>
      </div>
    </section>
  );
}
