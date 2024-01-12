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

  return (
    <>
      <h1>{tinaData.data.news.title}</h1>
      <TinaMarkdown content={tinaData.data.news.body} />
    </>
  );
}
