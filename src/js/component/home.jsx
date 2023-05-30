import React, { useState } from "react";

//create your first component
		 function Home() {
			const [color, setColor] = useState("green");
			return (
				<div className="text-center">
					<div className="soporte"></div>
					<div className="semaforo">
						<div
							onClick={() => setColor("red")}
							className={"red" + (color === "red" ? " luz" : "")}>
						</div>
						<div
							onClick={() => setColor("yellow")}
							className={"yellow" + (color === "yellow" ? " luz" : "")}>
						</div>
						<div
							onClick={() => setColor("green")}
							className={"green" + (color === "green" ? " luz" : "")}>
						</div>
					</div>
				</div>
			);
		}
	;

export default Home;