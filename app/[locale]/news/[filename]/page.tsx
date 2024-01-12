import React from 'react';
import { client } from '@fss-fmi-site/tina/__generated__/databaseClient';
import { NewsPostContent } from '@fss-fmi-site/components/news-post-content/news-post-content';

async function getNewsPost(relativePath: string) {
  return client.queries.news({ relativePath });
}

async function NewsPost() {
  const relativePath = 'hello-world.md';
  const newsPost = await getNewsPost(relativePath);

  return (
    <NewsPostContent
      data={JSON.stringify(newsPost.data)}
      query={newsPost.query}
      variables={newsPost.variables}
    />
  );
}

export default NewsPost;
