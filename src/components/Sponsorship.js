import React, { useEffect } from "react";
import "../styles/Sponsor.css";
import shooter3 from "../images/swts4.jpg";
import sherrif from "../images/sherrif.png";
import Button from "@material-ui/core/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Sponsorship = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade" className="sponsor">
      <div
        className="sponsor__bg"
        style={{ backgroundImage: `url(${shooter3})` }}
      >
        <h2>Sponsorship & Registration</h2>
        <p>Support Us Every Step Of The Way</p>
      </div>
      <div data-aos="fade" className="sponsor__levels">
        <div className="sponsor__levelsLeft">
          <img
            src="https://live.staticflickr.com/8742/30023574562_c22d7ebf66_b.jpg"
            alt=""
          />
        </div>
        <div className="sponsor__levelsRight">
          <h2>
            <img src={sherrif} alt='sherrif star'  />
            Sherrif Level
          </h2>
          <h3>$10,000 & Up</h3>
          <ul>
            <li>‍○ Breakfast</li>
            <li>‍○ Lunch</li>
            <li>‍○ Gift bags & T-Shirts</li>
            <li>‍○ 4 Teams (16 Total Shooters)</li>
            <li>‍○ Website Ads</li>
            <li>
              ‍○ Logo displayed at Each Station, on the Event Banner & T-Shirts
            </li>
            <li>‍○ VIP Parking</li>
            <li>‍○ Display Booth</li>
            <li>‍○ Event Naming Rights</li>
          </ul>
          <div className="sponsor__btns">
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Register
            </Button>
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Sponsor
            </Button>
          </div>
        </div>
      </div>
      <div data-aos="fade" className="sponsor__levels">
        <div className="sponsor__levelsRight">
          <h2>
            <img src={sherrif} alt='sherrif star'  />
            Major Level
          </h2>
          <h3>$5,000 & Up</h3>
          <ul>
            <li>‍○ Breakfast</li>
            <li>‍○ Lunch</li>
            <li>‍○ Gift bags & T-Shirts</li>
            <li>‍○ 3 Teams (12 Total Shooters)</li>
            <li>‍○ Website Ads</li>
            <li>
              ‍○ Logo displayed at Each Station, on the Event Banner & T-Shirts
            </li>
            <li>‍○ VIP Parking</li>
            <li>‍○ Display Booth</li>
          </ul>
          <div className="sponsor__btns">
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Register
            </Button>
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Sponsor
            </Button>
          </div>
        </div>
        <div className="sponsor__levelsLeft">
          <img
            src="https://i.ytimg.com/vi/Zr8k3N7VS0c/maxresdefault.jpg"
            alt=""
          />
        </div>
      </div>
      <div data-aos="fade" className="sponsor__levels">
        <div className="sponsor__levelsLeft">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/52/Skeet._William_H._Keever%2C_USA.JPEG"
            alt=""
          />
        </div>
        <div className="sponsor__levelsRight">
          <h2>
            <img src={sherrif} alt='sherrif star'  />
            Captain Level
          </h2>
          <h3>$2,500 & Up</h3>
          <ul>
            <li>‍○ Breakfast</li>
            <li>‍○ Lunch</li>
            <li>‍○ Gift bag</li>
            <li>‍○ T-Shirt</li>
            <li>‍○ 2 Teams (8 Total Shooters)</li>
            <li>‍○ Website Ads</li>
            <li>‍○ Logo displayed at Each Station</li>
            <li>‍○ Logo displayed at Event Banner</li>
            <li>‍○ VIP Parking</li>
          </ul>
          <div className="sponsor__btns">
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Register
            </Button>
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Sponsor
            </Button>
          </div>
        </div>
      </div>
      <div data-aos="fade" className="sponsor__levels">
        <div className="sponsor__levelsRight">
          <h2>
            <img src={sherrif} alt='sherrif star'  />
            Lieutenant Level
          </h2>
          <h3>$1,000 & Up</h3>
          <ul>
            <li>‍○ Breakfast</li>
            <li>‍○ Lunch</li>
            <li>‍○ Gift bag</li>
            <li>‍○ T-Shirt</li>
            <li>‍○ 1 Team (4 Total Shooter)</li>
            <li>‍○ Website Ads</li>
            <li>‍○ Logo displayed at Each Station</li>
          </ul>
          <div className="sponsor__btns">
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Register
            </Button>
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Sponsor
            </Button>
          </div>
        </div>
        <div className="sponsor__levelsLeft">
          <img
            src="https://i.pinimg.com/originals/65/28/cd/6528cd7cceb177309068edaaea54b806.jpg"
            alt=""
          />
        </div>
      </div>
      <div data-aos="fade" className="sponsor__levels">
        <div className="sponsor__levelsLeft">
          <img
            src="https://triblive.com/wp-content/uploads/2019/10/1814276_web1_gtr-LatTrapTeam-101719.jpg"
            alt=""
          />
        </div>
        <div className="sponsor__levelsRight">
          <h2>
            <img src={sherrif} alt='sherrif star'  />
            Sergeant Level
          </h2>
          <h3>$750 & Up</h3>
          <ul>
            <li>‍○ Breakfast</li>
            <li>‍○ Lunch</li>
            <li>‍○ Gift bag</li>
            <li>‍○ T-Shirt</li>
            <li>‍○ 1 Team (4 Total Shooter)</li>
            <li>‍○ Website Ads</li>
            <li>‍○ Logo displayed at Event Banner</li>
          </ul>
          <div className="sponsor__btns">
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Register
            </Button>
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Sponsor
            </Button>
          </div>
        </div>
      </div>
      <div data-aos="fade" className="sponsor__levels">
        <div className="sponsor__levelsRight">
          <h2>
            <img src={sherrif} alt='sherrif star'  />
            Corporal Level
          </h2>
          <h3>$600 & Up</h3>
          <ul>
            <li>‍○ Breakfast</li>
            <li>‍○ Lunch</li>
            <li>‍○ Gift bag</li>
            <li>‍○ T-Shirt</li>
            <li>‍○ 1 Team (4 Total Shooters)</li>
          </ul>
          <div className="sponsor__btns">
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Register
            </Button>
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Sponsor
            </Button>
          </div>
        </div>
        <div className="sponsor__levelsLeft">
          <img
            src="https://media.defense.gov/2017/Oct/16/2001828165/780/780/0/171012-F-LX370-0018.JPG"
            alt=""
          />
        </div>
      </div>
      <div data-aos="fade" className="sponsor__levels">
        <div className="sponsor__levelsLeft">
          <img
            src="https://news.orvis.com/images/03-hunting/2016/08-aug/sandanona1.jpg"
            alt=""
          />
        </div>
        <div className="sponsor__levelsRight">
          <h2>
            <img src={sherrif} alt='sherrif star'  />
            Deputy Level
          </h2>
          <h3>$175 & Up</h3>
          <ul>
            <li>‍○ Breakfast</li>
            <li>‍○ Lunch</li>
            <li>‍○ Gift bag</li>
            <li>‍○ T-Shirt</li>
            <li>‍○ Individual Shooter</li>
          </ul>
          <div className="sponsor__btns">
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
                marginBottom: 20,
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Register
            </Button>
            <Button
              data-aos="fade-up"
              size="large"
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: 150,
                fontWeight: 400,
                fontSize: "1rem",
                color: "white",
              }}
              href="https://form.jotform.com/200624989336160"
            >
              Sponsor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
