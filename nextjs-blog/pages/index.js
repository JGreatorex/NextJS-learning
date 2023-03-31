import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData} from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Hello, I'm <strong>Jamie</strong>. I'm a Web developer. You can contact me on <a href="https://www.twitter.com/jamiegreatorex" target="_blank">Twitter</a>.</p>
            <p>This is a sample site built with <a href="https://nextjs.org" target="_blank">Next.js</a>.</p>
        </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                      {title}
                      <br />
                      {id}
                      <br />
                      {date}
                  </li>
              ))}
          </ul>
      </section>
      </Layout>
  );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        }
    }
}