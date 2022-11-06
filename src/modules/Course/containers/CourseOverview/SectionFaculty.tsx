import React, { ComponentProps } from 'react';
import { HiOutlinePlay, HiOutlineStar, HiOutlineUsers } from 'react-icons/hi';

import CardEducator from '../../components/CardEducator';

const SectionFaculty: React.FC<ComponentProps<'div'>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
        Corpo Docente
      </h3>
      <div className="flex h-full flex flex-wrap gap-x-2 md:gap-x-6 lg:gap-x-16 gap-y-2.5 lg:gap-y-20 md:gap-y-8">
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
