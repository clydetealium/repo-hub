import React from 'react';
import SchemaForm from './SchemaForm';
import schema from './schema.json';
import uiSchema from './uiSchema.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SchemaForm schema={schema} uiSchema={uiSchema} />
    </div>
  );
}

export default App;
