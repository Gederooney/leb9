import React from 'react'

const DeliveryCompanies = (props) => {
	return (
		<>
			{props.deliveryList.map((list) => {
				return (
					<div
						key={list.name}
						onClick={() => props.setDeliveryCompany(list.name)}
						className="card col-12 col-sm-4 col-md-3 col-lg-2">
						<div className="d-flex flex-column justify-content-between h-100 p-2 align-items-center">
							<span className="logo p-4">
								<img
									className="img-fluid"
									src={list.logo}
									alt={"Logo de " + list.name}
								/>
							</span>
							<span className="name">{list.name}</span>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default DeliveryCompanies

