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
    <main className="flex flex-col items-center justify-center px-4 py-6 md:px-6 lg:py-16 md:py-12">
      <NewsPostContent
        data={JSON.stringify(newsPost.data)}
        query={newsPost.query}
        variables={newsPost.variables}
      />
    </main>
  );
}

export default NewsPost;
