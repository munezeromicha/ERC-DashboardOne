import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichTextEditor.css';

type RichTextEditorProps = {
  onSubmit: (content: string) => void;
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onSubmit }) => {
  const [content, setContent] = useState<string>('');

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handleSubmit = () => {
    onSubmit(content);
  };

  return (
    <div className="max-w-4xl mx-auto mt-24">
      <h1 className="text-2xl font-bold text-center mb-4">Add an Article</h1>
      <p className="text-center text-gray-500 mb-4">
        We provide both technical assistance and statistical consultancy to our clients.
      </p>
      <div className="bg-white shadow-md rounded-lg p-4">
        <ReactQuill
          value={content}
          onChange={handleChange}
          className="h-60 mb-4"
          theme="snow"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
