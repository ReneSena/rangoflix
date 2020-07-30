import React from 'react';

import { FieldWrapper, Field, FieldArea, Label } from './styled';

const FormField = ({ type, name, value, onChange, label }) => {
    return(
        <FieldWrapper>
            {type === 'textarea' ? 
                <FieldArea 
                    type={type} 
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    rows="5"
                    cols="30"
                /> :  
                <Field
                    type={type} 
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                />
            }
        
            <Label className="description-label">
                {label}
            </Label>
        </FieldWrapper>
    );
}

export default FormField;