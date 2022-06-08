import axios from "axios";
import { React } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import uploadpng from "../../assets/images/uploadcv/upload.png";
import "./main.css";


const MainComp = () => {
  const { user } = UserAuth();
  // const [response, setResponse] = useState([]);
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);
  // const result = Object.values(response.experiences)

  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     navigate("/");
  //     console.log("You are logged out");
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

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

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://talentlyca-db-default-rtdb.asia-southeast1.firebasedatabase.app/inferences/${user.uid}.json`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setResponse(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.log(err);
  //     });
  // }, []);
  
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
      <div>
        <Link to="/result">Result Page</Link>
      </div>

      {/* <div className="button">
        <ul className="right">
          <a href="#">Back</a>
          <a href="#">Confirm</a>
        </ul>
      </div> */}
      {/* <div className="position">
        <div className="result-head">
          <div className="container-res">
            <h2>Name : {user.displayName}</h2>
            <h2>Email : {user.email}</h2>

            <h1>Result</h1>
            <h2>Experiences</h2>
            {Object.values(response.experiences)?.map((item, index) => {
              return (
                <ul>
                  <li>{item}</li>
                </ul>
              );
            })}

            <h2>Skills</h2>
            {Object.values(response.skills)?.map((item, index) => {
              return (
                <ul>
                  <li>{item}</li>
                </ul>
              );
            })}

            <button className="btn-logout" onClick={handleLogout}>
              Log out
            </button>

          </div>
        </div>
      </div> */}
    </>
  );
};

export default MainComp;
