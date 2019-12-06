export const allStudents = () => {
	return dispatch => {
		fetch("/api/v1/users/all", {
			headers: {
				Authorization: `${localStorage.getItem("token")}`,
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				dispatch({ type: "STUDENTLIST", payload: data });
			});
	};
};
