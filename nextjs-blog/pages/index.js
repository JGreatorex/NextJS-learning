import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Hello, I'm <strong>Jamie</strong>. I'm a Web developer. You can contact me on <a href="https://www.twitter.com/jamiegreatorex" target="_blank">Twitter</a>.</p>
            <p>This is a sample site built with <a href="https://nextjs.org" target="_blank">Next.js</a>.</p>
        </section>
      </Layout>
  );
}