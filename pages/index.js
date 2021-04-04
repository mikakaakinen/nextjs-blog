import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ul>
          <li>I am a self-taught front- and backend developer.</li>
          <li>
            On the frontend I mainly work with React and vanilla JavaScript.
          </li>
          <li>On the backend I have experience with Node.js.</li>
          <li>MongoDB and Firebase are the databases I have worked with.</li>
          <li>I have also some experience with GraphQL and Redux Toolkit.</li>
          <li>
            Recently I have tentatively studied Next.js and after that I aim to
            have a look at Hasura.
          </li>
          <li>
            On the photo I pose with my teacher colleaque Olavi (me on the
            right).
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
