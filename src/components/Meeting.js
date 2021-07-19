import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "../css/main.scss";

const Meeting = () => {
	const deliveryList = [
		{
			name: "Purolator",
			logo: "https://11tcma2eyqgmz6zyt1x6na8n-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/thumbs-purolator-01.png",
		},
		{
			name: "Post Canada",
			logo: "https://www.canadapost-postescanada.ca/scp/assets/cpc/uploads/logos/aboutus/cpc-main-logo.svg",
		},
	];
	const companyList = [
		{
			name: "Via Capital",
			logo: "http://www.viacapitalevendu.com/Content/Images/logo_via_corpo.png",
			employees: [{ name: "Rick Turcotte" }, { name: "Emma Dorbré" }],
		},
		{
			name: "Location BCI",
			logo: "https://locationbci.ca/wp-content/uploads/2019/03/Location-BCI-Logo-28873.png",
			employees: [
				{ name: "Rick Turcotte" },
				{ name: "Emma Dorbré" },
				{ name: "Antoine Germain" },
			],
		},
	];
	const [deliveryCompany, setDeliveryCompany] = useState("");
	const [company, setCompany] = useState();
	const [showModal, setShowModal] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [employee, setEmployee] = useState();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phone: "",
	});

	const handleEmployeeClicked = (employee) => {
		setEmployee(employee);
		return setShowForm(true);
	};
	const handleChange = (e) => {};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log({ company, employee, formData });
	};
	return (
		<div className="container-fluid">
			<div className="row">
				<Sidebar
					intro={"Je viens rencontrer une"}
					purpose={"Entreprise"}
					icon={"person"}
					href={"/"}
				/>
				<Main
					link={"/meeting"}
					deliveryCompany={deliveryCompany}
					setDeliveryCompany={setDeliveryCompany}
					deliveryList={deliveryList}
					companyList={companyList}
					company={company}
					setCompany={setCompany}
					setShowModal={setShowModal}
					showModal={showModal}
					handleEmployeeClicked={handleEmployeeClicked}
					showForm={showForm}
					formData={formData}
					setFormData={setFormData}
					handleChange={handleChange}
					onSubmit={onSubmit}
					setEmployee={setEmployee}
					setShowForm={setShowForm}
				/>
			</div>
		</div>
	);
};

export default Meeting;
