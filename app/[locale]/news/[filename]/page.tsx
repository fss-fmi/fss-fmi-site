import { client } from '@fss-fmi-site/tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

async function getNewsPost(relativePath: string) {
  return client.queries.news({ relativePath });
}

async function NewsPost() {
  const relativePath = 'hello-world.md';
  const newsPost = await getNewsPost(relativePath);

  return (
    <>
      <h1>{newsPost.data.news.title}</h1>
      <TinaMarkdown content={newsPost.data.news.body} />
    </>
  );
}

export default NewsPost;
