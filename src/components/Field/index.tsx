import * as React from 'react';

export interface FieldProps {}

const Field: React.FC<FieldProps> = ({ ...resetProps }) => {
  return <div className="x-field" {...resetProps}></div>;
};

Field.defaultProps = {};

export default Field;
