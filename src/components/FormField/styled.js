import styled from 'styled-components';

export const FieldWrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
    width: 100%;

    /* &:last-of-type {
        margin-bottom: 40px;
    } */

    .description-label {
        transition: all 200ms linear;
    }
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 20px;
    color: var(--black);
    transform: scale(1) translateY(-50%);
`;

export const Field = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 4px;

    &[type="color"] {
        padding: 20px 10px 5px 10px;
        border: none;

        &::-webkit-color-swatch-wrapper {
            /* padding: 0; */
        }

        &::-webkit-color-swatch {
            border: none;
            /* padding: 0; */
        }

        & + .description-label {
            font-size: 12px;
            font-weight: 600;
            position: absolute;
            top: 30%;
            left: 20px;
        }
    }

    &:not([type="color"]) {
        padding: 20px 20px 0 20px;
   
        &:focus,
        &:valid {
            background-color: #f3f3f3;
            border-bottom: 2px solid #27ec83;
            box-shadow: 0 5px 5px -10px #000;
        }

        &:focus + .description-label,
        &:valid + .description-label {
            left: 20px;
            /* font-size: 12px; */
            transform: scale(0.9) translateY(-100%);        
        }
    }

`;

export const FieldArea = styled.textarea`
    width: 100%;
    resize: none;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 4px;
    padding: 25px 20px 0 20px;

    &:focus,
    &:valid {
        background-color: #f3f3f3;
        border-bottom: 2px solid #27ec83;
    }

    &:focus + .description-label,
    &:valid + .description-label {
        left: 20px;
        /* font-size: 12px; */
        transform: scale(0.9) translateY(-100%);        
    }

    & + .description-label {
        font-size: 14px;
        font-weight: 600;
        position: absolute;
        top: 20%;
        left: 20px;
        color: var(--black);
        transform: scale(1) translateY(-20%);
    }
`;
