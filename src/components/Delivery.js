import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "../css/main.scss";
import { Redirect } from "react-router-dom";

const Delivery = () => {
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
	const [employee, setEmployee] = useState();
	const [showMessage, setSHowMessage] = useState(false);

	const handleEmployeeClicked = (employee) => {
		setEmployee(employee);
		//make a post request with the infos
		//deliveryCompany
		//company
		//employee
		return setSHowMessage(true);
	};
	if (showMessage) {
		alert(employee);
	}
	return showMessage ? (
		<Redirect to="/" />
	) : (
		<div className="container-fluid">
			<div className="row">
				<Sidebar
					intro={"J'éffectue une "}
					purpose={"Livraison"}
					icon={"truck"}
					href={"/"}
				/>
				<Main
					link={"/delivery"}
					deliveryCompany={deliveryCompany}
					setDeliveryCompany={setDeliveryCompany}
					deliveryList={deliveryList}
					companyList={companyList}
					company={company}
					setCompany={setCompany}
					setEmployee={setEmployee}
					setShowModal={setShowModal}
					showModal={showModal}
					handleEmployeeClicked={handleEmployeeClicked}
				/>
			</div>
		</div>
	);
};

export default Delivery;
