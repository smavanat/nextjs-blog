import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilstyles from '../styles/utils.module.css';

export default function Home() {
  return (
  <Layout home><Head><title>{siteTitle}</title></Head>
  <section className={utilstyles.headingMd}><p>[I am a student completing this task as a work experience project in Next.js]</p>
  <p>(This is a sample website - you'll be building a site like this on {' '}
  <a href = "https://netjs.org/learn">our Next.js tutorial</a>)</p></section></Layout>
  )
}
