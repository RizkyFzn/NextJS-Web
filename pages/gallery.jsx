import Head from 'next/head';
import Navbar from '../component/Navbar';

function gallery() {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <Navbar />

      <section className="home">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="text-title">Gallery</h1>
            <p className="desc">Lorem ipsum dolor sit.</p>

            <div className="gallery-wrapper">
              <div className="gallery-item">
                <img src="/Pro.jpg" alt="" className="gallery-img" />
                <h4 className="gallery-name">Pro Messager</h4>
                <div className="galery-category">Mobile App UI</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default gallery;
