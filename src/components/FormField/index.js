import React from 'react';
import PropTypes from 'prop-types';

import {
  FieldWrapper, Field, FieldArea, Label,
} from './styled';

const FormField = ({
  type, name, value, onChange, label, suggestions,
}) => {

  const hasSuggestion = Boolean(suggestions.length);

  return(
    <FieldWrapper>
      {type === 'textarea'
        ? (
          <FieldArea
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            rows="4"
            cols="30"
          />
        )
        : (
          <Field
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            list={hasSuggestion ? `suggestion_${name}` : undefined}
            autoComplete={hasSuggestion ? "off" : "on"}
          />
        )}

      <Label className="description-label">
        {label}
      </Label>
      {
        hasSuggestion && (
          <datalist id={`suggestion_${name}`}>
            {
              suggestions.map((suggestion, index) => (
                <option key={index} value={suggestion}>{suggestion}</option>
              ))
            }
          </datalist>
        )
      }
    </FieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
  id: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
};

export default FormField;
