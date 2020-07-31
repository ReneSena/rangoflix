import styled from 'styled-components';
import { Trash } from '@styled-icons/boxicons-solid/Trash';
import { Edit } from '@styled-icons/evaicons-solid/Edit';

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
`

export const Form = styled.form`
    width: 40%;
    /* margin: auto; */

    @media (max-width: 800px) {
        width: 100%;
        padding: 0 20px;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    text-align: center;
`
export const ButtonSave = styled.button`
    padding: 0 20px;
    border: 0;
    border-radius: 5px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    background-color: #03a04c;
    color: #fff;
    cursor: pointer;
    outline:none;

    &:focus {
        outline: none;
    }

    &:hover {
        opacity: 0.8;
    }
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
    /* margin-left: auto; */
    /* margin-right: auto; */
    margin-bottom: 20px;

    @media (max-width: 800px) {
        width: 100%;
        padding: 0 20px;
    }

    th, tr, td {
        padding: 10px 20px;
        text-align: left;
    }

    tr:not(:first-of-type), td {
        color: #000;
        background-color: #f3f3f3;
        border-bottom: 1px solid #fff;
    }

    tr:hover td {
        background-color: #fff;
    }
`

export const ButtonDelete = styled(Trash)`
    color: var(--red);
    width: 24px;
    cursor: pointer;
`

export const ButtonUpdate = styled(Edit)`
    color: var(--primary);
    width: 24px;
    margin-right: 10px;
    cursor: pointer;
`