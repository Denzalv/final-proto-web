import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import uploadpng from "../../assets/images/uploadcv/upload.png";
import "./main.css";
import LoadingImage from "../../assets/images/Loading/loading.png";

const MainComp = () => {
  const { user, logout } = UserAuth();
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const result = Object.values(response.experiences)

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  //Fetching API
  const UploadPdf = async (event) => {
    const filePdf = event.target.files[0];
    const uuid = `${user.uid}`;
    console.log(uuid);
    const formData = {
      // uid: uuid,
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
        // { uid: uuid, file: filePdf }
        data: formData,
        headers: header,
        // responseType: "json",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://talentlyca-db-default-rtdb.asia-southeast1.firebasedatabase.app/inferences/${user.uid}.json`
      )
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setResponse(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  // console.log(result)
  return (
    // <div className='max-w-[600px] mx-auto my-16 p-4'>
    //   <h1 className='text-2xl font-bold py-4'>Account</h1>
    //   <p>User Email: {user && user.email}</p>

    //   <button onClick={handleLogout} className='border px-6 py-2 my-4'>
    //     Logout
    //   </button>
    // </div>
    <>
      <h1 className="title"> CV Extraction </h1>
      <div id="upload">
        <section className="container">
          <h1> Upload PDF Here </h1>
          <div className="image">
            <img src={uploadpng} alt="uploadlogo" />
          </div>

          <form>
            <input
              className="btn-choose"
              type="file"
              name="file"
              accept="application/pdf"
              onChange={UploadPdf}
            />
          </form>
        </section>
      </div>
      {/* <div>
        <Link to="/result">Result Page</Link>
      </div> */}

      {/* <div className="button">
        <ul className="right">
          <a href="#">Back</a>
          <a href="#">Confirm</a>
        </ul>
      </div> */}
      <div className="position">
        <div className="result-head">
          <div className="container-res">
            <h2>Name : {user.displayName}</h2>
            <h2>Email : {user.email}</h2>

            <h1>Result</h1>
            <h2>Experiences</h2>
            {/* {loading ? (<img src={LoadingImage} alt="loading" /> ) : (response.map((item, idx) =>
        <ul>
          <li key={idx}>{item.experiences}</li>
        </ul>

        ))} */}

            <ul>
              <li>{response.experiences[0]}</li>
              <li>{response.experiences[1]}</li>
              <li>{response.experiences[2]}</li>
              <li>{response.experiences[3]}</li>
            </ul>
            <h2>Skills</h2>
            <ul>
              <li>{response.skills[0]}</li>
              <li>{response.skills[1]}</li>
              <li>{response.skills[2]}</li>
              <li>{response.skills[3]}</li>
              <li>{response.skills[4]}</li>
              <li>{response.skills[5]}</li>
              <li>{response.skills[6]}</li>
              <li>{response.skills[7]}</li>
              <li>{response.skills[8]}</li>
              <li>{response.skills[9]}</li>
              <li>{response.skills[10]}</li>
              <li>{response.skills[11]}</li>
              <li>{response.skills[12]}</li>
              <li>{response.skills[13]}</li>
              <li>{response.skills[14]}</li>
              <li>{response.skills[15]}</li>
              <li>{response.skills[16]}</li>
            </ul>
            <button className="btn-logout" onClick={handleLogout}>Log out</button>
            {/*  */}
          </div>
        </div>
      </div>
      {/* <div>
        <h1>Result</h1>
        <h2>experience</h2>
        <p>{response.experiences}</p>
        <h2>Skills</h2>
        <p>{response.skills}</p>
      </div> */}
    </>
  );
};

export default MainComp;
