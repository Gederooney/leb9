import React from "react";

const ContactForm = (props) => {
	return (
		<>
			<div
				id="sidebar-wrapper"
				className={
					props.showModal
						? "col-lg-3 col-md-4 col-sm-6 col-12 shadow active"
						: "col-lg-3 col-md-4 col-sm-6 col-12 shadow"
				}>
				<div className="header">
					<div className="d-flex flex-row justify-content-between">
						<span
							onClick={() => {
								return props.setShowForm(false);
							}}>
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
						</span>
						<span>
							{props.company ? (
								<img
									className="img-fluid"
									src={props.company.logo}
									alt={props.company.name + "Logo officiel"}
								/>
							) : (
								""
							)}
						</span>
					</div>
					<div className="d-flex flex-column">
						<span className="name">
							{props.company ? props.company.name : ""}
						</span>
						<span className="intro">Aviser un employé</span>
					</div>
				</div>
				<div className="body">
					<form>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Email address
							</label>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
							<div id="emailHelp" class="form-text">
								We'll never share your email with anyone else.
							</div>
						</div>
						<div class="mb-3">
							<label for="exampleInputPassword1" class="form-label">
								Password
							</label>
							<input
								type="password"
								class="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<div class="mb-3 form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="exampleCheck1"
							/>
							<label class="form-check-label" for="exampleCheck1">
								Check me out
							</label>
						</div>
						<button type="submit" class="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
