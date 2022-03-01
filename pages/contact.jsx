import Navbar from '../component/Navbar';
import Head from 'next/head';

function contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <section className="home">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="text-title">Contact</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum corrupti amet, ut pariatur id atque consectetur. Iusto, ea aut magnam, architecto unde quo saepe in officia molestiae voluptate voluptatum! Vel
              doloremque, est assumenda.
            </p>
            <ul className="contact-link">
              <li className="contact-item">Email : rfauzan211@gmail.com</li>
              <li className="contact-item">Phone : +62 813 6765 0271</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default contact;
