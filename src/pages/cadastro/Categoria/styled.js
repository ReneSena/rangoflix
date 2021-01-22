import styled from "styled-components";
import { Trash } from "@styled-icons/boxicons-solid/Trash";
import { Edit } from "@styled-icons/evaicons-solid/Edit";
import { ButtonSuccess } from "../../../components/Button";

export const ContainerWrapper = styled.div`
	margin-top: 60px;
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 30px;
	padding-top: 30px;
	border-top: 1px solid #c1c1c1;
`;

export const Form = styled.form`
	width: 50%;
	padding: 40px;
	background-color: var(--white);
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
	margin: auto;

	@media (max-width: 800px) {
		width: 100%;
		padding: 0 20px;
	}
`;

export const Title = styled.h1`
	color: #222;
	font-size: 24px;
	font-weight: 700;
	text-align: left;
	margin-bottom: 30px;
`;

export const ScrollTable = styled.div`
	width: 100%;
	overflow-x: hidden;
	overflow-y: scroll;
	height: 500px;
`;

export const Table = styled.table`
	width: 60%;
	max-width: 100%;
	font-size: 14px;
	border-collapse: separate;
	border-spacing: 0 5px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;

	@media (max-width: 800px) {
		width: 100%;
		padding: 0 20px;
	}

	th {
		font-weight: 600;
	}

	th,
	tr,
	td {
		padding: 10px 20px;
		text-align: left;
	}

	tr:not(:first-of-type),
	td {
		color: #e5e5e5;
		background-color: #53585d;
		border-bottom: 1px solid var(--white);
	}

	tr:hover td {
		background-color: #484d51;
	}

	tr td:first-child {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	tr td:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`;

// export const IconDelete = styled(Trash)`
//     color: #E5E5E5;
//     width: 24px;
//     cursor: pointer;
//     z-index: 1;
// `;

// export const IconUpdate = styled(Edit)`
//     color: #E5E5E5;
//     width: 24px;
//     margin-right: 10px;
//     cursor: pointer;
//     z-index: 1;
// `;
