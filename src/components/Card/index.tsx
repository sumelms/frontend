import React, { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  isLink?: boolean;
  url?: string;
  isExternal?: boolean;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  isLink,
  url,
  isExternal,
  children,
}: CardProps) => {
  const content = (
    <>
      {image && <img src={image} className="w-full" />}
      <div className="px-6 py-4">
        {title && (
          <h3 className="text-gray-800 text-3xl font-semibold">{title}</h3>
        )}
        {description && <div className="mt-2 text-gray-600">{description}</div>}
      </div>
      {children}
    </>
  );

  return isLink ? (
    <div
      data-testid="card-element"
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <a
        href={url}
        target={isExternal ? '_blank' : ''}
        className="max-w-md"
        rel="noreferrer"
      >
        {content}
      </a>
    </div>
  ) : (
    <div
      data-testid="card-element"
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      {content}
    </div>
  );
};
export default Card;
