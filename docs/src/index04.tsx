import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/main'

//Cardの読み込み
import Card from '../components/card'

const Home: NextPage = () => {
  return (
	<>
		<Layout>
			<Head>
				<title>あいうえお</title>
			</Head>
			<div className="row">
				<div className="col">
					<Card title="カードのテスト" image="https://placehold.jp/250x250.png?text=カード画像">
						<Link href="/test">
							<a className="btn btn-primary">testへのリンク</a>
						</Link>
					</Card>
				</div>
				<div className="col">
					<Card title="カードのテスト" image="https://placehold.jp/250x250.png?text=カード画像">
						<Link href="/test">
							<a className="btn btn-primary">testへのリンク</a>
						</Link>
					</Card>
				</div>
				<div className="col">
					<Card title="カードのテスト" image="https://placehold.jp/250x250.png?text=カード画像">
						<Link href="/test">
							<a className="btn btn-primary">testへのリンク</a>
						</Link>
					</Card>
				</div>
			</div>
		</Layout>
	</>
  )
}

export default Home
