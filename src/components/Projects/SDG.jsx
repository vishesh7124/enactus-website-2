import React from "react";

function SDG(props){
    return (
      <div className="sdg">
        <img className="sdg-img" src={props.img} alt="sdg" />
        <img className="sdgs-img" src={props.sdg_img}/>
        <div className="sdg-text">
          <div className="sdg-head">{props.head}</div>
          <div className="sdg-subhead">{props.subhead}</div>
          <div className="sdg-content">{props.content}</div>
        </div>
        {/* <div className='sdg-images'> */}
        {/* <img className="sdg-overlap" style={} src={}></img> */}
        {/* </div> */}
      </div>
    );
}

export default SDG;