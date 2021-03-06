import React, { Component } from 'react';
import EBSFinancialLogo from '../images/EBSFinancialLogo.png';
import EBSLogo from '../images/EBSLogo.png';
import Headshot from '../images/head-shot.jpeg';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          name: 'Financial Planning',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum illum, rerum officiis perferendis neque iure quaerat at, et, mollitia quisquam minima itaque deleniti inventore obcaecati corporis deserunt reprehenderit rem illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum animi, iure perspiciatis eligendi minima ipsum ullam, voluptate rerum magni illum. Cum illum sapiente expedita! Fugiat, quidem? Dolores, modi officia.'
        },
        {
          name: 'Asset Management',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum illum, rerum officiis perferendis neque iure quaerat at, et, mollitia quisquam minima itaque deleniti inventore obcaecati corporis deserunt reprehenderit rem illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum animi, iure perspiciatis eligendi minima ipsum ullam, voluptate rerum magni illum. Cum illum sapiente expedita! Fugiat, quidem? Dolores, modi officia.'
        },
        {
          name: 'Estate Planning',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum illum, rerum officiis perferendis neque iure quaerat at, et, mollitia quisquam minima itaque deleniti inventore obcaecati corporis deserunt reprehenderit rem illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum animi, iure perspiciatis eligendi minima ipsum ullam, voluptate rerum magni illum. Cum illum sapiente expedita! Fugiat, quidem? Dolores, modi officia.'
        },
        {
          name: 'Insurance Planning',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum illum, rerum officiis perferendis neque iure quaerat at, et, mollitia quisquam minima itaque deleniti inventore obcaecati corporis deserunt reprehenderit rem illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum animi, iure perspiciatis eligendi minima ipsum ullam, voluptate rerum magni illum. Cum illum sapiente expedita! Fugiat, quidem? Dolores, modi officia.'
        },
        {
          name: 'Tax Return Preparation',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum illum, rerum officiis perferendis neque iure quaerat at, et, mollitia quisquam minima itaque deleniti inventore obcaecati corporis deserunt reprehenderit rem illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum animi, iure perspiciatis eligendi minima ipsum ullam, voluptate rerum magni illum. Cum illum sapiente expedita! Fugiat, quidem? Dolores, modi officia.'
        }
      ],
      style: { height: 0, display: none },
      clicked: false
    };
  }

  _handleClick(event, item) {
    console.log(event.target);
    console.log(item);
    this.setState({
      style: { height: `${300}px`, display='block' }
    });
  }

  render() {
    return (
      <>
        <section className="hero-image" id="home">
          <img src={EBSFinancialLogo} alt="" />
        </section>
        <section className="about">
          <h2 id="about-me">Our Firm</h2>
          <ul className="cert-list" data-aos="fade-right">
            <li id="name">Eric B. Salvio</li>
            <li>Registered Investment Advisor Representative</li>
            <li>Registered Representative</li>
            <li>Acccredited Investment Fiduciary &reg;</li>
          </ul>
          <img src={Headshot} alt="Headshot" data-aos="fade-left" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            illum, rerum officiis perferendis neque iure quaerat at, et,
            mollitia quisquam minima itaque deleniti inventore obcaecati
            corporis deserunt reprehenderit rem illo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium eum animi, iure
            perspiciatis eligendi minima ipsum ullam, voluptate rerum magni
            illum. Cum illum sapiente expedita! Fugiat, quidem? Dolores, modi
            officia.
          </p>
        </section>
        <section className="second-image" id="services-id">
          <h2>Services</h2>
        </section>
        <section className="services">
          <ul className="service-list" data-list1>
            {this.state.services.map((item, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-right"
                  onClick={event => {
                    this._handleClick(event, item);
                  }}
                >
                  {item.name}
                  <div
                    className="info info-hidden"
                    style={{ height: `${this.state.divHeight}px` }}
                  >
                    <p className="service-p">{item.desc}</p>
                  </div>
                </li>
              );
            })}
            {/* <li data-aos="fade-right">
              Financial Planning
              <div className="info info-hidden">
                <p className="service-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates quasi nulla earum tenetur adipisci aperiam in
                  corrupti ipsam vel quisquam, totam repellat vitae voluptatibus
                  modi deserunt distinctio ipsa deleniti molestiae. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptates quasi
                  nulla earum tenetur adipisci aperiam in corrupti ipsam vel
                  quisquam, totam repellat vitae voluptatibus modi deserunt
                  distinctio ipsa deleniti molestiae.
                </p>
              </div>
            </li>
            <li data-aos="fade-left" data-aos-delay="100">
              Asset Management
              <div className="info info-hidden">
                <p className="service-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates quasi nulla earum tenetur adipisci aperiam in
                  corrupti ipsam vel quisquam, totam repellat vitae voluptatibus
                  modi deserunt distinctio ipsa deleniti molestiae. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptates quasi
                  nulla earum tenetur adipisci aperiam in corrupti ipsam vel
                  quisquam, totam repellat vitae voluptatibus modi deserunt
                  distinctio ipsa deleniti molestiae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptates quasi nulla earum
                  tenetur adipisci aperiam in corrupti ipsam vel quisquam, totam
                  repellat vitae voluptatibus modi deserunt distinctio ipsa
                  deleniti molestiae.
                </p>
              </div>
            </li>
            <li data-aos="fade-right" data-aos-delay="200">
              Estate Planning
              <div className="info info-hidden">
                <p className="service-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates quasi nulla earum tenetur adipisci aperiam in
                  corrupti ipsam vel quisquam, totam repellat vitae voluptatibus
                  modi deserunt distinctio ipsa deleniti molestiae. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptates quasi
                  nulla earum tenetur adipisci aperiam in corrupti ipsam vel
                  quisquam, totam repellat vitae voluptatibus modi deserunt
                  distinctio ipsa deleniti molestiae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptates quasi nulla earum
                  tenetur adipisci aperiam in corrupti ipsam vel quisquam, totam
                  repellat vitae voluptatibus modi deserunt distinctio ipsa
                  deleniti molestiae.
                </p>
              </div>
            </li>
            <li data-aos="fade-left" data-aos-delay="300">
              Insurance Planning
              <div className="info info-hidden">
                <p className="service-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates quasi nulla earum tenetur adipisci aperiam in
                  corrupti ipsam vel quisquam, totam repellat vitae voluptatibus
                  modi deserunt distinctio ipsa deleniti molestiae. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptates quasi
                  nulla earum tenetur adipisci aperiam in corrupti ipsam vel
                  quisquam, totam repellat vitae voluptatibus modi deserunt
                  distinctio ipsa deleniti molestiae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptates quasi nulla earum
                  tenetur adipisci aperiam in corrupti ipsam vel quisquam, totam
                  repellat vitae voluptatibus modi deserunt distinctio ipsa
                  deleniti molestiae.
                </p>
              </div>
            </li>
            <li data-aos="fade-right" data-aos-delay="400">
              Tax Return Preparation
              <div className="info info-hidden">
                <p className="service-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates quasi nulla earum tenetur adipisci aperiam in
                  corrupti ipsam vel quisquam, totam repellat vitae voluptatibus
                  modi deserunt distinctio ipsa deleniti molestiae. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptates quasi
                  nulla earum tenetur adipisci aperiam in corrupti ipsam vel
                  quisquam, totam repellat vitae voluptatibus modi deserunt
                  distinctio ipsa deleniti molestiae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptates quasi nulla earum
                  tenetur adipisci aperiam in corrupti ipsam vel quisquam, totam
                  repellat vitae voluptatibus modi deserunt distinctio ipsa
                  deleniti molestiae.
                </p>
              </div>
            </li> */}
          </ul>
        </section>
        <section className="back-image3" id="your-accounts">
          <h2>Resource Center</h2>
        </section>
        <section className="accounts">
          <h4>Quickly access any of your accounts through these links.</h4>
          <ul className="account-links">
            <li data-list2 data-aos="fade-up">
              Investments
              <ul className="info info-hidden resourceList">
                <li>
                  <a
                    href="https://investor.wealthscape.com/access/investor-index.html?login"
                    target="_blank"
                  >
                    Parkland Securities, LLC
                  </a>
                </li>
                <li>
                  <a
                    href="https://institutional.fidelity.com/app/home/individual-investors"
                    target="_blank"
                  >
                    Fidelity Investments
                  </a>
                </li>
                <li>
                  <a href="https://ltretire.com/sign-in/" target="_blank">
                    LT Trust Company
                  </a>
                </li>
                <li>
                  <a
                    href="https://portal.pensco.com/identity/login"
                    target="_blank"
                  >
                    Pensco Trust Company
                  </a>
                </li>
              </ul>
            </li>
            <li data-list3 data-aos="fade-up" data-aos-delay="100">
              Insurance
              <ul className="nestList info-hidden resourceList">
                <li />
                <li data-list3-a>
                  Health Insurance
                  <ul
                    className="info info-hidden resourceList"
                    id="nestedList1"
                  >
                    <li>
                      <a href="https://www.anthem.com/" target="_blank">
                        Anthem Blue Cross
                      </a>
                    </li>
                    <li>
                      <a href="https://www.blueshieldca.com/" target="_blank">
                        Blue Shield of California
                      </a>
                    </li>
                    <li>
                      <a href="https://www.healthnet.com/" target="_blank">
                        HealthNet
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://healthy.kaiserpermanente.org/"
                        target="_blank"
                      >
                        Kaiser Permanente
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.molinahealthcare.com/en-US/Pages/home.aspx"
                        target="_blank"
                      >
                        Molina Healthcare
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hioscar.com/la" target="_blank">
                        Oscar Health Plan
                      </a>
                    </li>
                    <li>
                      <a href="https://www.scanhealthplan.com/" target="_blank">
                        Scan Health Plan
                      </a>
                    </li>
                  </ul>
                </li>
                <li data-list3-b>
                  Annuities & Life Insurance
                  <ul
                    className="info info-hidden resourceList"
                    id="nestedList2"
                  >
                    <li>
                      <a href="https://www.allianzlife.com/" target="_blank">
                        Allianz Life Insurance
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.midlandnational.com/"
                        target="_blank"
                      >
                        Midland National Life
                      </a>
                    </li>
                    <li>
                      <a href="https://www.metlife.com/" target="_blank">
                        MetLife
                      </a>
                    </li>
                    <li>
                      <a href="https://www.newyorklife.com/" target="_blank">
                        New York Life
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.prudential.com/personal/home-page-3"
                        target="_blank"
                      >
                        Prudential Life
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li data-ts data-aos="fade-up" data-aos-delay="200">
              Tax Services
              <div className="info info-hidden" id="tax-services">
                <img src={EBSLogo} alt="" />
                <p data-ts-p className="service-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, fuga quis tempore quo totam porro unde sunt, provident
                  doloribus soluta est odit modi eius nisi culpa incidunt a
                  harum id!
                </p>
              </div>
            </li>
          </ul>
        </section>
      </>
    );
  }
}
