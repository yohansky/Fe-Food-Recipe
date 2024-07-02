import React, { useEffect, useState } from "react";
import NavbarLogin from "../../../components/NavbarLogin";
import video from "../../../assets/img/video.png";
import axios from "axios";
import NavbarProfile from "../../../components/NavbarProfile";

const DetailVideo = () => {
  //   const [videoTitle, setVideoTitle] = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=YOUR_API_KEY`);
  //         const title = response.data.items[0].snippet.title;
  //         setVideoTitle(title);
  //       } catch (error) {
  //         console.error("Error fetching video title:", error);
  //       }
  //     };

  //     fetchData();
  //   }, [videoId]);

  return (
    <>
      <NavbarProfile />
      <div style={{ marginTop: "4vh", marginLeft: "208px" }}>
        <div className="video-responsive">
          <iframe width="900px" height="550px" src="https://www.youtube.com/embed/5QjHERWrvVA" title="Youtube Video" allowFullScreen></iframe>
        </div>
        <div style={{ marginTop: "2vh" }}>
          <h2 style={{ fontWeight: "500", fontSize: "32px" }}>5 Menit Jadi! Resep Roti Telur Lipat Korea [Pakai Cabe Makin Maknyus]</h2>
        </div>
        <div style={{ marginTop: "10px" }}>
          <h5 style={{ color: "#AAAAAA", fontWeight: "500", fontSize: "24px" }}>3 Months ago</h5>
        </div>
      </div>
    </>
  );
};

export default DetailVideo;
