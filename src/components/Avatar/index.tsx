import React from 'react';

export interface NotificationProps {
  status?: 'online' | 'offline' | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Notification: React.FC<NotificationProps> = ({ status, size }: NotificationProps) => {
  return (
    <span
      className={`absolute inline-block bottom-0 right-0 
      ${size === 'sm' ? 'w-3 h-3 border-2' : ''}
      ${size === 'md' ? 'w-6 h-6 border-4' : ''}
      ${size === 'lg' ? 'w-8 h-8 border-4' : ''}
      ${size === 'xl' ? 'w-12 h-12 border-4' : ''}
      ${status === 'online' ? 'bg-green-400' : ''}
      ${status === 'offline' ? 'bg-red-400' : ''}
      border-white rounded-full z-2`}
    />
  );
};

export interface AvatarProps extends NotificationProps {
  url: string;
  name: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const Avatar: React.FC<AvatarProps> = ({ url, name, size = 'md', status = null }: AvatarProps) => {
  return (
    <div
      role="img"
      aria-label={`User avatar for ${name}. ${status ? `Use is ${status} right now.` : ''}`}
      className={`relative inline-block
      ${size === 'sm' ? 'w-12 h-12' : ''} 
      ${size === 'md' ? 'w-24 h-24' : ''}
      ${size === 'lg' ? 'w-36 h-36' : ''}
      ${size === 'xl' ? 'w-52 h-52' : ''}
    `}
    >
      <img className="border border-gray-100 rounded-full shadow-sm" src={url} alt={name} />
      {status ? <Notification status={status} size={size} /> : ''}
    </div>
  );
};

export default Avatar;
