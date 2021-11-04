import React from 'react';

export interface LinkProps {
  label?: string;
  url?: string;
}

const Link: React.FC<LinkProps> = ({ label, url }: LinkProps) => {
  return (
    <a
      href={url}
      className="text-lg no-underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
    >
      {label}
    </a>
  );
};
export interface CardProps extends LinkProps {
  title: string;
  description: string;
  isLink: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  isLink,
  url,
  label,
}: CardProps) => {
  return (
    <div
      data-testid="card-element"
      className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
    >
      <div className="text-gray-800 text-3xl font-semibold">{title}</div>
      <div className="mt-2 text-gray-600">{description}</div>
      <div className="flex justify-start mt-4">
        {isLink ? <Link url={url} label={label} /> : ''}
      </div>
    </div>
  );
};
export default Card;
