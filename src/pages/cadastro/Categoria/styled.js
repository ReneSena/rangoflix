import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`

export const Form = styled.form`
    width: 30%;
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

export const Table = styled.table`
    width: 40%;
    margin-left: 30px;
    border-collapse: separate;
    border-spacing: 0 5px;

    @media (max-width: 800px) {
        width: 100%;
        padding: 0 20px;
    }

    th, tr, td {
        /* border: 1px solid #fff; */
        padding: 10px 20px;
        text-align: left;
    }

    tr, td {
        color: #000;
        background-color: #ddd;
        border-bottom: 1px solid #fff;
    }

    tr {
        margin-bottom: 10px;
    }
`