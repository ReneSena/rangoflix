import styled from 'styled-components';

export const FieldWrapper = styled.div`
    position: relative;
    margin-bottom: 20px;

    &:last-of-type {
        margin-bottom: 40px;
    }

    .description-label {
        transition: all 200ms linear;
    }
`

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 20px;
    color: var(--black);
    transform: translateY(-50%);
`

export const Field = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 4px;
    padding: 20px 20px 0 20px;

    &:focus,
    &:valid {
        background-color: #f3f3f3;
        border: 2px solid #27ec83;
    }

    &:focus + .description-label,
    &:valid + .description-label {
        left: 20px;
        font-size: 12px;
        transform: translateY(-100%);        
    }
` 

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
        /* border: 2px solid #27ec83; */
    }

    &:focus + .description-label,
    &:valid + .description-label {
        left: 20px;
        font-size: 12px;
        transform: translateY(-100%);        
    }

    & + .description-label {
        font-size: 14px;
        font-weight: 600;
        position: absolute;
        top: 20%;
        left: 20px;
        color: var(--black);
        transform: translateY(-20%);
    }
`;