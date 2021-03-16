import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Takahiro Okada</p>
        <p>Githubのアカウントはこちらからです。<a href="https://github.com/takahiro-okada/nextjs-tutorial">Githubを見る</a></p>
      </section>
      </Layout>
  )
}
