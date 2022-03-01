import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../component/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <section className="home">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="text-title">Selamat Datang</h1>
            <p className="desc">Situs ini dibangun dengan Framework NextJS</p>

            <Link href="/contact">
              <a className="cta">Contact</a>
            </Link>
          </div>
          <div className="image-wrapper">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quis neque aut, repellat provident distinctio quibusdam repellendus animi ea dolores iusto impedit eaque necessitatibus, ut autem odit optio sunt est quasi? Commodi,
            suscipit? Tenetur earum eum quibusdam? Consequatur quasi quidem aspernatur ipsa rem facere soluta, dolor fuga nostrum perspiciatis eius.
          </div>
        </div>
      </section>
    </>
  );
}
