import React from "react";
import "../css/sidebar.scss";

const Sidebar = (props) => {
	return (
		<div className="sidebar col-md-3 d-flex flex-column">
			<div className="logo">
				<img src="assets/images/logo.png" alt="" />
			</div>
			<div className="body d-flex flex-column">
				<span className="icon">
					{props.icon === "truck" ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							fill="currentColor"
							class="bi bi-truck"
							viewBox="0 0 16 16">
							<path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							fill="currentColor"
							class="bi bi-person"
							viewBox="0 0 16 16">
							<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
						</svg>
					)}
				</span>
				<span className="intro">{props.intro}</span>
				<span className="purpose">{props.purpose}</span>
				<span className="arrow_left">
					<a href={props.href}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-arrow-left"
							viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
							/>
						</svg>
					</a>
				</span>
			</div>
		</div>
	);
};

export default Sidebar;
