/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

import Date from '../components/date';
import PageLayout from '../layouts/page_layout';

import { getSortedPostsData } from '../lib/posts';

import styles from './index.module.css'
import utilStyles from '/styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <PageLayout description='This is the my sample blog website.' home title="Home">
      <section className={styles.headingMd}>
        <p>Hello, I'm Fredy. I'm a software enginer and keyborad player. You can contact me on <a href="https://twitter.com/FreddyAlvaradoR" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
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
    </PageLayout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}