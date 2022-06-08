import axios from "axios";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import LoadingImage from "../../assets/images/Loading/loading.png";

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
		return <img src={LoadingImage} alt="loading" />;
	}

  if (loading) {
    return <img src={LoadingImage} alt="loading" />;
  }

  return (
    <>
      <div>
        <div className="position">
          <div className="result-head">
            <div className="container-res">
              <h2>Name : {user.displayName}</h2>
              <h2>Email : {user.email}</h2>

              <h1>Result</h1>
              <h2>Experiences</h2>
              {/* {loading ? (
              <img src={LoadingImage} alt="loading" />
            ) : (
              Object.values(response.experiences)?.map((item, index) => (
                <ul>
                  <li>{item}</li>
                </ul>
              ))
            )} */}
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
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Result;
