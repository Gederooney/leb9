import React from "react";

const Employeesbar = (props) => {
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
								props.setEmployee();
								return props.setShowModal(false);
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
					{props.company
						? props.company.employees.map((employee) => {
								return (
									<div
										className="row employee__row"
										onClick={() => props.handleEmployeeClicked(employee.name)}>
										<span>{employee.picture}</span>
										<div className="description d-flex flex-column">
											<span>{employee.name}</span>
											<span>{employee.position}</span>
										</div>
									</div>
								);
						  })
						: ""}
				</div>
			</div>
		</>
	);
};

export default Employeesbar;
