import SpeakupSvg from "../assets/graphics/speakup.svg?react";

interface PostProps {
  author: {
    name: string;
    avatar: string;
    profile: string;
  };
  title: string;
  href: string;
}
function Post({ author, title, href }: PostProps) {
  return (
    <div className="flex gap-2 p-4 border border-violet-400 rounded-xl overflow-hidden bg-violet-50">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <a href={href} className="text-3xl font-bold text-gray-900">
          {title}
        </a>
        <p className="text-gray-700 font-medium">{author.name} • Mar 6, 2024</p>
        <p className="text-sm text-gray-600">#tag1 #tag2 #tag3</p>
      </div>
    </div>
  );
}

export default function PostsSection() {
  return (
    <section>
      <SpeakupSvg className="absolute w-40 -top-20 -right-16 rotate-y-180" />
      <h1 className="font-serif text-4xl font-bold text-violet-800 mb-1">
        Hear the Voices...
      </h1>
      <p className="font-serif text-sm text-gray-800 mb-6 font-semibold">
        of our beloved community, of how they aspire, how they achieve, and how
        they grow.
      </p>
      <div className="flex flex-col gap-4">
        <Post
          author={{
            name: "Anna",
            avatar:
              "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F114867%2Fb741231c-1c7f-4139-9cbc-d6223fd9675b.jpg",
            profile: "https://dev.to/annaspies",
          }}
          title="The Loneliness of Trying to #EmbraceEquity in FAANG"
          href="https://dev.to/annaspies/the-loneliness-of-trying-to-embraceequity-in-faang-4609"
        />
        <Post
          author={{
            name: "Windya Madhushani",
            avatar:
              "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1022181%2F384587bb-40af-4173-bf24-3af0b11d0516.jpg",
            profile: "https://dev.to/windyaaa",
          }}
          title="What do you think about ‘Gender Equity’?"
          href="https://dev.to/windyaaa/what-do-you-think-about-gender-equity-149e"
        />
        <Post
          author={{
            name: "Sarah Dye",
            avatar:
              "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F61140%2F481f3099-febe-4380-b17a-c67fb746a61b.jpg",
            profile: "https://dev.to/theoriginalbpc",
          }}
          title="Dear Princess Programmer: Keep Coding!"
          href="https://dev.to/annaspies/the-loneliness-of-trying-to-embraceequity-in-faang-4609"
        />
        <Post
          author={{
            name: "Anna",
            avatar:
              "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F114867%2Fb741231c-1c7f-4139-9cbc-d6223fd9675b.jpg",
            profile: "https://dev.to/annaspies",
          }}
          title="The Loneliness of Trying to #EmbraceEquity in FAANG"
          href="https://dev.to/annaspies/the-loneliness-of-trying-to-embraceequity-in-faang-4609"
        />
        <Post
          author={{
            name: "Windya Madhushani",
            avatar:
              "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1022181%2F384587bb-40af-4173-bf24-3af0b11d0516.jpg",
            profile: "https://dev.to/windyaaa",
          }}
          title="What do you think about ‘Gender Equity’?"
          href="https://dev.to/windyaaa/what-do-you-think-about-gender-equity-149e"
        />
        <Post
          author={{
            name: "Sarah Dye",
            avatar:
              "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F61140%2F481f3099-febe-4380-b17a-c67fb746a61b.jpg",
            profile: "https://dev.to/theoriginalbpc",
          }}
          title="Dear Princess Programmer: Keep Coding!"
          href="https://dev.to/annaspies/the-loneliness-of-trying-to-embraceequity-in-faang-4609"
        />
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
