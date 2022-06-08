import axios from "axios";
import { React } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import uploadpng from "../../assets/images/uploadcv/upload.png";
import "./main.css";

const MainComp = () => {
  const { user } = UserAuth();

  //Fetching API
  const UploadPdf = async (event) => {
    const filePdf = event.target.files[0];
    const uuid = `${user.uid}`;
    console.log(uuid);
    const formData = {
      file: filePdf,
    };
    console.log(formData);

    const header = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "multipart/form-data",
    };
    console.log(header);

    try {
      const response = await axios({
        method: "POST",
        url: `http://34.123.130.206:5000/api/v1/predict?uid=${uuid}`,
        data: formData,
        headers: header,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="title"> CV Extraction </h1>
      <div id="upload">
        <section className="container">
          <h1> Upload PDF Here </h1>
          <div className="image">
            <img src={uploadpng} alt="uploadlogo" />
          </div>

          <form>
            <label className="btn-choose">
              Choose File
            <input
            className="input-xx"
              type="file"
              name="file"
              accept="application/pdf"
              onChange={UploadPdf}
            />
            </label>
          </form>
          <p class="drop"> Please choose only PDF</p>
        </section>
      </div>
      <div className="btn-nav">
        <Link to="/">
          <button className="btn-left">Back</button>
        </Link>

        <Link to="/result">
          <button className="btn-right">Confirm</button>
        </Link>

        
      </div>

      {/* <div className="button">
        <ul className="right">
          <a href="#">Back</a>
          <a href="#">Confirm</a>
        </ul>
      </div> */}
    </>
  );
};

export default MainComp;
