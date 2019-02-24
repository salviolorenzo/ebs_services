import React from 'react';
import ReactContactForm from 'react-mail-form';

export default function Footer(props) {
  return (
    <footer>
      <h2 id="contact">Get in touch</h2>
      <ReactContactForm to="salviolorenzo@gmail.com">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            data-aos="zoom-in"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
          <input
            type="textarea"
            name="message"
            placeholder="Message"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <input
            id="submit"
            type="submit"
            name="submit"
            placeholder="Submit"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
        </form>
      </ReactContactForm>
      <ul>
        <li>
          <a href="tel:949-285-9600">
            <i className="fas fa-phone-square" />
          </a>
        </li>
        <li>
          <a href="mailto:ericsalvio@aol.com">
            <i className="fas fa-at" />
          </a>
        </li>
        <li>
          <a>
            <i className="fas fa-fax" />
          </a>
        </li>
        <li>
          <a>
            <i className="fas fa-envelope" />
          </a>
        </li>
      </ul>
      <p>
        Check the background of your financial professional on FINRA's{' '}
        <a href="https://brokercheck.finra.org/" target="_blank">
          BrokerCheck
        </a>
      </p>
      <section className="disclosures">
        <p>
          Securities offered through Parkland Securities, LLC, member FINRA
          (FINRA.org)and SIPC (SIPC.org). Investment Advisory services offered
          through SPC, a Registered Investment Advisor, is independent of
          Parkland Securities, LLC and SPC.
        </p>
        <p>
          Content is strictly for general purposes and is not an offer to sell
          or solicit any security. For regulatory purposes, we cannot respond to
          e-mails through this site and any individualized follow-up involving
          either effecting or attempting to effect transactions in securities,
          or the rendering of personalized investment advice for compensation,
          will not be made to persons in states where the registered
          representative is not registered. Third party posts found on this
          profile have not been reviewed for accuracy or completeness by nor do
          they reflect the views of Parkland Securities, LLC, SPC.
        </p>
      </section>
      <a href="http://lorenzosalvio.com" target="_blank">
        <img src="images/bbLBlack.png" alt="" />
      </a>
      <p>Built by Lorenzo Salvio</p>
    </footer>
  );
}
