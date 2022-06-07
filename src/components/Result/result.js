import axios from "axios";
import { React, useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

const Result = () => {
	const user = UserAuth()
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () =>{
			try{
				const {data: response} = await axios.get(`https://talentlyca-db-default-rtdb.asia-southeast1.firebasedatabase.app/inferences/${user.uid}.json`)
      setData(response)
			console.log(response)
			console.log(data)
			} catch (error) {
				console.log(error.message)
			}
			setLoading(false)
		}
		fetchData()
  }, []);

	return (
		<>
		<div>
			{/* <p>{response.experiences}</p> */}
			{loading && <div>Loading</div>}
    {!loading && (
      <div>
        <h2>Doing stuff with data</h2>
        {data.map(item => (<span>{item.name}</span>))}
		</div>
		)}
		</div>
		</>
	)
}
export default Result;