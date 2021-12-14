import React from 'react'
import '../css/About.css'

export default function Aboutus() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>This Application Made By FoodServ.</p>
        <p>All The Right Reserved FoodServ @2021-22 And Handel By Kishore Malpathak.</p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div class="d-flex justify-content-around">
        <div className="row">

          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Kishore Malpathak</h2>
                <p className="title">CEO & Founder</p>
                <p>“Don’t worry about failure always try.”</p>
                <p>malpathakkishore@gmail.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Kishore Malpathak</h2>
                <p className="title">Art Director</p>
                <p>“Always deliver more than expected.”</p>
                <p>malpathakkishore@gmail.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Kishore Malpathak</h2>
                <p className="title">Designer</p>
                <p>Stay selffunded as long as possible.”</p>
                <p>malpathakkishore@gmail.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
