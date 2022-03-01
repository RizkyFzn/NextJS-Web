import Head from 'next/head';
import Navbar from '../component/Navbar';

function about() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <section className="home">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="text-title">About</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum corrupti amet, ut pariatur id atque consectetur. Iusto, ea aut magnam, architecto unde quo saepe in officia molestiae voluptate voluptatum! Vel
              doloremque, est assumenda.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
