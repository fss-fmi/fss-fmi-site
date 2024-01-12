'use client';

import React from 'react';
import { NewsQueryVariables } from '@fss-fmi-site/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type NewsPost = {
  data: string;
  variables: NewsQueryVariables;
  query: string;
};

export function NewsPostContent({ data, variables, query }: NewsPost) {
  const tinaData = useTina({
    data: JSON.parse(data),
    variables,
    query,
  });

  const content = tinaData.data.news;

  return (
    <article className="prose prose-gray mx-auto dark:prose-invert">
      <div className="space-y-2 not-prose">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
          {content.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Публикувано на {content.publicationDate.toLocaleString()}
        </p>
      </div>
      <figure>
        <img
          alt="Cover"
          className="aspect-video object-cover"
          height="340"
          src={content.heroImage}
          width="340"
        />
      </figure>
      <TinaMarkdown content={content.body} />
    </article>
  );
}
