import axios from "axios";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import LoadingImage from "../../assets/images/Loading/loading.png";
import "./result.css";

const Result = () => {
  const { user, logout } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://talentlyca-db-default-rtdb.asia-southeast1.firebasedatabase.app/inferences/${user.uid}.json`
      )
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  }, [user.uid]);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  if (response === null) {
    return (
      <div className="img-con">
        <div className="img-load">
          <img src={LoadingImage} alt="loading" />
        </div>
        <div className="text-load">
          <p>.....please wait, we are extracting your cv.....</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="img-con">
        <div className="img-load">
          <img src={LoadingImage} alt="loading" />
        </div>
        <div className="text-load">
          <p>.....please wait, we are extracting your cv.....</p>
        </div>
      </div>
    );
  }

  return (
    <>
		<h1 className="center">Result</h1>
      <div className="backg">
				<div className="con-long">

        <div className="conFis">
          <div className="result-head2p">
            <div className="rule">
              <div className="img-conFis">
                <img src="https://picsum.photos/200" />
              </div>
              <div className="text-conFis">
                <h2 className="border-txt">Name : {user.displayName}</h2>
                <h2 className="border-txt">Email : {user.email}</h2>
              </div>

              <button className="btn-logout" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
        </div>
        
        <div className="split">
          <div className="position">
            <div className="result-head">
              <div className="container-res">
                <h3>Experiences</h3>

                {Object.values(response.experiences)?.map((item, index) => {
                  return (
                    <ul>
                      <li>{item}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="position">
          <div className="result-head">
            <div className="container-res">
              <h3>Skills</h3>
              {Object.values(response.skills)?.map((item, index) => {
                return (
                  <ul>
                    <li>{item}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
			</div>
    </>
  );
};
export default Result;
