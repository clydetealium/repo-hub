import React, { useState } from 'react';
// import Form from '@rjsf/core';
import Form from '@rjsf/bootstrap-4';
import validator from '@rjsf/validator-ajv8';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SchemaForm({ schema, uiSchema }) {
  const [formData, setFormData] = useState({});

  const onChange = ({ formData }) => {
    setFormData(formData);
    // validator.validate(formData, schema);
  };

  const onSubmit = ({ formData }) => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
        onError={console.error}
      />
    </div>
  );

  // return (
  //   <div className="container">
  //     <h1>Form Example</h1>
  //     <Form
  //       schema={schema}
  //       validator={validate}
  //       formData={formData}
  //       onChange={onChange}
  //       onSubmit={onSubmit}
  //       onError={(errors) => console.log('Form errors:', errors)}
  //       showErrorList={false}
  //       liveValidate
  //       ObjectFieldTemplate={({ properties }) => (
  //         <div>
  //           {properties.map((element, index) => (
  //             <div className="mb-3" key={index}>
  //               {element.content}
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //       ErrorList={({ errors }) => (
  //         <ul className="list-unstyled">
  //           {errors.map((error, index) => (
  //             <li key={index} className="text-danger">
  //               {error.stack}
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //       ArrayFieldTemplate={({ items }) => (
  //         <div>
  //           {items.map((element, index) => (
  //             <div key={index}>
  //               {element.children}
  //               <button
  //                 type="button"
  //                 className="btn btn-danger"
  //                 onClick={element.onDropIndexClick(index)}
  //               >
  //                 Remove
  //               </button>
  //             </div>
  //           ))}
  //           <button
  //             type="button"
  //             className="btn btn-success"
  //             onClick={items.onAddClick}
  //           >
  //             Add Item
  //           </button>
  //         </div>
  //       )}
  //     />
  //   </div>
  // );
}

export default SchemaForm;
