import React from "react";
import img1 from "../../assets/img/logo_html.png"
import img2 from "../../assets/img/logo_css.png"
import img3 from "../../assets/img/logo_brush.png"
import { useNavigate } from "react-router-dom";


const Card = ({ src, url, title }) => {

const navigate= useNavigate();


  return (
    <div>
    <div onClick={()=>navigate("/html")} className="box">
      <img src={img1} alt="" />
      <h3>HTML5  Markup</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
    <div className="box">
      <img  src={img2} alt="" />
      <h3>CSS3 Styling</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
    <div className="box">
      <img  src={img3} alt="" />
      <h3>Graphic Design</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
    </div>
  );
};

export default Card;
