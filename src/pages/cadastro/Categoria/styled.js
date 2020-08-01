import styled from 'styled-components';
import { Trash } from '@styled-icons/boxicons-solid/Trash';
import { Edit } from '@styled-icons/evaicons-solid/Edit';
import { ButtonSuccess } from '../../../components/Button';


export const ContainerWrapper = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px; */
`

export const Form = styled.form`
    width: 50%;
    margin: auto;

    @media (max-width: 800px) {
        width: 100%;
        padding: 0 20px;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
`

export const ScrollTable = styled.div`
    width: 100%
    overflow-x: hidden;
    overflow-y: scroll;
    height: 500px;
` 

export const Table = styled.table`
    width: 50%;
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

    th, tr, td {
        padding: 10px 20px;
        text-align: left;
    }

    tr:not(:first-of-type), td {
        color: #E5E5E5;
        background-color: #53585D;
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
`

export const ButtonDelete = styled(Trash)`
    color: #E5E5E5;
    width: 24px;
    cursor: pointer;
`

export const ButtonUpdate = styled(Edit)`
    color: #E5E5E5;
    width: 24px;
    margin-right: 10px;
    cursor: pointer;
`