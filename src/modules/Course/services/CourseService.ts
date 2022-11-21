import Axios from '../../../services/axios';

interface ICourseDetails {
  key: string;
  label: string;
  value: string;
  order: number;
}
export interface ICourse {
  id: number;
  uuid: string;
  name: string;
  subtitle: string;
  slug: string;
  details: ICourseDetails[];
}

const CourseService = {
  getCourses() {
    return Axios.get<Array<ICourse>>('/courses');
  },

  getCoursePage(uid: string) {
    return {
      title: 'Sistemas de Informação',
      subtitle: 'O caminho para a sua formação profissional e pessoal. ',
      headerItems: [
        {
          key: 'grade',
          label: 'Grade',
          value: 'Bacharelado',
          order: 1,
        },
        {
          key: 'modality',
          label: 'Modalidade do curso',
          value: 'Híbrido',
          order: 2,
        },
        {
          key: 'lessons',
          label: 'Lições',
          value: '25',
          order: 3,
        },
      ],
      navbarItems: [
        { label: 'Apresentação', route: `/courses/${uid}` },
        { label: 'Acessar turmas', route: `/courses/${uid}/classrooms` },
        {
          label: 'Inscrição nas turmas',
          route: `/courses/${uid}/classrooms/subscription`,
        },
        {
          label: 'Matriz Curricular',
          route: `/courses/${uid}/matrix`,
        },
      ],
    };
  },

  getCourseOverview(uid: string) {
    return {
      description:
        'A área de tecnologia da informação está em constante crescimento, sempre com oportunidades para os profissionais do ramo. O curso de Sistemas de Informação da USP proporciona aos alunos uma formação sólida de desenvolvimento de software, com toda a estrutura necessária para o ensino. Como é uma área muito dinâmica, o curso também realiza palestras, cursos e demais eventos ao longo da graduação para manter os alunos atualizados com as novidades do mercado. A área de tecnologia da informação está em constante crescimento, sempre com oportunidades para os profissionais do ramo. O curso de Sistemas de Informação da USP proporciona aos alunos uma formação sólida de desenvolvimento de software, com toda a estrutura necessária para o ensino. Como é uma área muito dinâmica, o curso também realiza palestras, cursos e demais eventos ao longo da graduação para manter os alunos atualizados com as novidades do mercado. A região de Ribeirão Preto é privilegiada porque abriga muitas empresas do ramo de TI, mas o profissional também pode atuar em praticamente todos os setores, oferecendo suporte e criando inovações digitais. A região de Ribeirão Preto é privilegiada porque abriga muitas empresas do ramo de TI, mas o profissional também pode atuar em praticamente todos os setores, oferecendo suporte e criando inovações digitais.',

      gallery: [
        {
          img: 'https://placeimg.com/640/480/tech',
          text: 'Lorem ipsum dolor sit amet, consect',
        },
        {
          img: 'https://placeimg.com/640/580/arch',
          text: 'Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect ipsum dolor sit amet, consect',
        },
        {
          img: 'https://placeimg.com/640/480/animals',
          text: 'Lorem ipsum dolor sit amet, consect',
        },
      ],

      educators: [
        {
          avatar:
            'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
          name: 'Prof. Dr. Jack Crawford',
          title: 'Vice-Coordenador',
        },
        {
          avatar:
            'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
          name: 'Prof. Dr. Jack Crawford',
          title: 'Vice-Coordenador',
        },
        {
          avatar:
            'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
          name: 'Prof. Dr. Jack Crawford',
          title: 'Vice-Coordenador',
        },
        {
          avatar:
            'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
          name: 'Prof. Dr. Jack Crawford',
          title: 'Vice-Coordenador',
        },
        {
          avatar:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          name: 'Prof. Dr. Jack Crawford',
          title: 'Vice-Coordenador',
        },
        {
          avatar:
            'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
          name: 'Prof. Dr. Jack Crawford',
          title: 'Vice-Coordenador',
        },
        {
          avatar:
            'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
          name: 'Prof. Dr. Jack Crawford',
          title: 'Vice-Coordenador',
        },
        {
          avatar:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          name: 'Prof. Dr. Jack Crawford',
          title: 'Vice-Coordenador',
        },
      ],
    };
  },
};

export default CourseService;
