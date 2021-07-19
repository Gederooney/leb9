import React from "react";
import Deliverycompanies from "./Deliverycompanies.js";
import Employeesbar from "./Employeesbar.js";
import CompaniesList from "./CompaniesList.js";
import ContactForm from "./ContactForm.js";
import "../css/main.scss";

const Main = (props) => {
	return (
		<div className="main col-md-9">
			{props.link === "/delivery" && props.deliveryCompany === "" ? (
				<>
					<div className="header">
						<span>Pour qu'elle entreprise travaillez-vous?</span>
					</div>
					<div className="content d-flex flex-row">
						<Deliverycompanies
							deliveryList={props.deliveryList}
							setDeliveryCompany={props.setDeliveryCompany}
						/>
					</div>
				</>
			) : (
				<>
					<div className="header">
						<span>Dans qu'elle entreprise allez-vous aujourd'hui?</span>
					</div>
					<CompaniesList
						setCompany={props.setCompany}
						companyList={props.companyList}
						setShowModal={props.setShowModal}
						setEmployee={props.setEmployee}
						setShowForm={props.setShowForm}
					/>
				</>
			)}

			{/* <!-- Sidebar --> */}
			{props.showForm ? (
				<ContactForm
					company={props.company}
					showModal={props.showModal}
					setShowModal={props.setShowModal}
					formData={props.formData}
					setFormData={props.setFormData}
					setEmployee={props.setEmployee}
					setShowForm={props.setShowForm}
				/>
			) : (
				<Employeesbar
					company={props.company}
					showModal={props.showModal}
					setShowModal={props.setShowModal}
					handleEmployeeClicked={props.handleEmployeeClicked}
					setEmployee={props.setEmployee}
				/>
			)}
		</div>
	);
};

export default Main;
