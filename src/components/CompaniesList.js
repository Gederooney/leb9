import React from "react";

const CompaniesList = (props) => {
	return (
		<>
			<>
				<div className="content d-flex flex-row">
					{props.companyList.map((list) => {
						return (
							<div
								key={list.name}
								onClick={() => {
									if (props.setShowForm) props.setShowForm(false);
									props.setEmployee(null);
									props.setCompany(list);
									return props.setShowModal(true);
								}}
								className="card col-12 col-sm-4 col-md-3 col-lg-2">
								<div className="d-flex flex-column justify-content-between h-100 p-2 align-items-center">
									<span className="logo pt-4">
										<img
											src={list.logo}
											alt={"Logo de " + list.name}
											className="img-fluid"
										/>
									</span>
									<span className="name">{list.name}</span>
								</div>
							</div>
						);
					})}
				</div>
			</>
		</>
	);
};

export default CompaniesList;
