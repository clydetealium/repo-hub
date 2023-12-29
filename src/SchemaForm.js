import React, { useState, useRef, useEffect } from 'react';
// import Form from '@rjsf/bootstrap-4';
import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SchemaForm({ schema, uiSchema }) {
  const [formData, setFormData] = useState({});
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  let prettyFormData = JSON.stringify(formData, null, 2);

  const onChange = ({ formData }) => {
    setFormData(formData);
    prettyFormData = JSON.stringify(formData, null, 2);
  };

  const onSubmit = ({ formData }) => {
    const formState = JSON.stringify(formData, null, 2);

    // Copy form state to clipboard
    navigator.clipboard.writeText(formState)
      .then(() => {
        alert('Form state copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy form state:', error);
      });
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const firstChildHeight = entry.contentRect.height + 'px';
        rightPanelRef.current.style.height = firstChildHeight;
      }
    });

    if (leftPanelRef.current) {
      observer.observe(leftPanelRef.current.firstElementChild);

      return () => {
        observer.disconnect();
      };
    }
  }, [formData]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" ref={leftPanelRef}>
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
        <div className="col-md-6" ref={rightPanelRef}>
          <textarea
            className="form-control"
            style={{ height: '100%' }}
            rows={10}
            value={prettyFormData}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default SchemaForm;
