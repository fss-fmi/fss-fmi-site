import {
  TinaUserCollection,
  UsernamePasswordAuthJSProvider,
} from 'tinacms-authjs/dist/tinacms';
import { defineConfig, LocalAuthProvider } from 'tinacms';

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';
// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'local';
export default defineConfig({
  contentApiUrlOverride: '/api/tina/gql',
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'media',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      TinaUserCollection,
      {
        name: 'news',
        label: 'Новини',
        path: 'content/news',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Заглавие',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'abstract',
            label: 'Абстракт',
            required: false,
          },
          {
            type: 'datetime',
            name: 'publicationDate',
            label: 'Дата на публикуване',
            required: true,
          },
          {
            type: 'image',
            name: 'heroImage',
            label: 'Заглавно изображение',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          // eslint-disable-next-line no-underscore-dangle
          router: ({ document }) => `bg/news/${document._sys.filename}`,
        },
      },
    ],
  },
});
