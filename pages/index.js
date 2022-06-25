import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilstyles from '../styles/utils.module.css';
import { getSortedPostsData} from '../lib/posts';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props: {allPostsData,},
  };
}

export default function Home({allPostsData}) {
  return (
  <Layout home><Head><title>{siteTitle}</title></Head>
  <section className={utilstyles.headingMd}><p>[I am a student completing this task as a work experience project in Next.js]</p>
  <p>(This is a sample website - you'll be building a site like this on {' '}
  <a href = "https://netjs.org/learn">our Next.js tutorial</a>)</p></section>
  <section className={`${utilstyles.headingMd} ${utilstyles.padding1px}`}>
    <h2 className={utilstyles.headingLg}>Blog</h2><u1 className = {utilstyles.list}>
      {allPostsData.map(({id, date, title}) => (<li className={utilstyles.listItem} key = {id}>{title}<br />{id}<br />{date}</li>))}
      </u1> </section> </Layout>
  );
}
