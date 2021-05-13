import React from "react";
import ReactDOM from "react-dom";
import foods from "./foods";

function HungryFAC(props) {
	const [foodurl, setFoodurl] = React.useState("");

	React.useEffect(() => {
		fetch(
			`https://api.unsplash.com/photos/random?query=${props.bg}&client_id=${
				import.meta.env.VITE_APP_API_KEY
			}&orientation=landscape`
		)
			.then((response) => {
				if (!response.ok) throw new Error(response.status);
				return response.json();
			})
			.then((data) => {
				document.getElementsByClassName(
					"hungryfac_page"
				)[0].style.backgroundImage = `url(${data.urls.regular})`;
			})
			.catch((error) => console.log(error));
	}, []);

	function handleSelect(e) {
		let selectedFood = [];
		foods.forEach((food) => {
			if (food.id === e.target.value) selectedFood.push(food.img_url);
		});
		setFoodurl(selectedFood[0]);
	}

	return (
		<div className="hungryfac_page">
			<div className="column_center ">
				<img src="../images/PizzaCheeseTransparent.png" />

				<form
					className="column_center "
					onSubmit={(event) => event.preventDefault()}
				>
					<label htmlFor="chooseFood"></label>
					<input
						list="foods"
						name="chooseFood"
						id="chooseFood"
						onSelect={handleSelect}
					/>
					<datalist id="foods">
						<option value="Pizza" />
						<option value="Burger" />
						<option value="Avocado Toast" />
						<option value="Cake" />
						<option value="Bagel" />
					</datalist>
					{/* <button type="submit">Enter</button> */}
					<img src={foodurl} />
				</form>
				<div className="members flexwrap">
					<div className="oli">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
					<div className="dan">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
					<div className="yvonne">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
					<div className="gregor">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
					<div className="oliver">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HungryFAC;
