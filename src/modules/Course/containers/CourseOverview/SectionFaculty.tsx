import React, { ComponentProps } from 'react';
import { HiOutlinePlay, HiOutlineStar, HiOutlineUsers } from 'react-icons/hi';

import CardEducator from '../../components/CardEducator';

const SectionFaculty: React.FC<ComponentProps<'div'>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="text-xl text-gray-900 dark:text-white">Corpo Docente </h3>
      <div className="flex h-full flex flex-wrap gap-6 lg:gap-12">
        <CardEducator
          educator={{
            avatar:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
            name: 'Prof. Dr. Jack Crawford',
            title: 'Vice-Coordenador',
          }}
          info={[
            { icon: HiOutlinePlay, name: 'Subjects', value: 7 },
            { icon: HiOutlineUsers, name: 'Estudantes', value: 7 },
            { icon: HiOutlineStar, name: 'Avaliação', value: 7 },
          ]}
        />
        <CardEducator
          educator={{
            avatar:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
            name: 'Prof. Dr. Jack Crawford',
            title: 'Vice-Coordenador',
          }}
          info={[
            { icon: HiOutlinePlay, name: 'Subjects', value: 7 },
            { icon: HiOutlineUsers, name: 'Estudantes', value: 7 },
            { icon: HiOutlineStar, name: 'Avaliação', value: 7 },
          ]}
        />
        <CardEducator
          educator={{
            avatar:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
            name: 'Prof. Dr. Jack Crawford',
            title: 'Vice-Coordenador',
          }}
          info={[
            { icon: HiOutlinePlay, name: 'Subjects', value: 7 },
            { icon: HiOutlineUsers, name: 'Estudantes', value: 7 },
            { icon: HiOutlineStar, name: 'Avaliação', value: 7 },
          ]}
        />
        <CardEducator
          educator={{
            avatar:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
            name: 'Prof. Dr. Jack Crawford',
            title: 'Vice-Coordenador',
          }}
          info={[
            { icon: HiOutlinePlay, name: 'Subjects', value: 7 },
            { icon: HiOutlineUsers, name: 'Estudantes', value: 7 },
            { icon: HiOutlineStar, name: 'Avaliação', value: 7 },
          ]}
        />
      </div>
    </div>
  );
};

export default SectionFaculty;
