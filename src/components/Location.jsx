/*global kakao*/ 
import React, { useEffect } from 'react'


const map3=[37.4971574,127.144457];
const map4=[37.5093906,127.079639];
const map5=[37.510439, 127.108490];//무엇보다 책방
const map6=[37.521932, 127.103782];
const Location=({id})=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    console.log(id);
    if (id==="3"|| id===3){
      var options = {
        center: new kakao.maps.LatLng(map3[0], map3[1]),
        level: 3
      };
      console.log("주책");
    }else if (id==="4"|| id===4){
      var options = {
        center: new kakao.maps.LatLng(map4[0], map4[1]),
        level: 3
      };console.log("하우스북스")
    }else if (id==="5" || id===5){
      var options = {
        center: new kakao.maps.LatLng(map5[0], map5[1]),
        level: 3
      };console.log("무엇보다 책방")
    }else{
      var options = {
        center: new kakao.maps.LatLng(map6[0], map6[1]),
        level: 3
      };console.log("서울 책보고")
    }

    var map = new kakao.maps.Map(container, options);
    if (id==="3" || id ===3){
      var markerPosition  = new kakao.maps.LatLng(map3[0], map3[1]); 
      console.log("주책");
    }
    else if (id==="4" || id===4){
      var markerPosition  = new kakao.maps.LatLng(map4[0], map4[1]); 
    }
    else if(id==="5" || id===5){
      var markerPosition  = new kakao.maps.LatLng(map5[0], map5[1]); 
    }else{
      var markerPosition  = new kakao.maps.LatLng(map6[0], map6[1]); 
    }

    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [id])


    return (
        <div>
        <div id="map" style={{width:"100%", height:"430px"}}></div>
       
        </div>
    )
}

export default Location;