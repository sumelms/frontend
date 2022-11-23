import React from 'react';
import ReactMarkdown from 'react-markdown';

export interface MarkdownProps {
  content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <div className="format lg:format-lg max-w-none dark:format-invert format-p:text-gray-800">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Markdown;
