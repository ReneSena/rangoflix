import React from 'react';
import PropTypes from 'prop-types';

import {
  FieldWrapper, Field, FieldArea, Label,
} from './styled';

const FormField = ({
  type, name, value, onChange, label,
}) => (
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
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      )}

    <Label className="description-label">
      {label}
    </Label>
  </FieldWrapper>
);

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
