import styled from "styled-components";

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
		color: #222;
		font-weight: 700;
	}

	th,
	tr,
	td {
		padding: 10px 20px;
		text-align: left;
	}

	tr:not(:first-of-type),
	td {
		color: #222;
		background-color: #fff;
		border-top: 1px solid #c1c1c1;
		border-bottom: 1px solid #c1c1c1;

		&:first-child {
			border-left: 1px solid #c1c1c1;
			border-top: 1px solid #c1c1c1;
			border-bottom: 1px solid #c1c1c1;
		}

		&:last-child {
			border-right: 1px solid #c1c1c1;
			border-top: 1px solid #c1c1c1;
			border-bottom: 1px solid #c1c1c1;
		}
	}

	tr:hover td {
		background-color: #f5f5f5;
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
