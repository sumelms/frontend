export type overviewInfo = {
  key: string;
  item: string;
  itemText: string;
  order: number;
};

const CourseService = {
  getCourse(uid: string) {
    const data = {
      title: 'Sistemas de Informação',
      subtitle: 'O caminho para a sua formação profissional e pessoal. ',
      description:
        'A área de tecnologia da informação está em constante crescimento, sempre com oportunidades para os profissionais do ramo. O curso de Sistemas de Informação da USP proporciona aos alunos uma formação sólida de desenvolvimento de software, com toda a estrutura necessária para o ensino. Como é uma área muito dinâmica, o curso também realiza palestras, cursos e demais eventos ao longo da graduação para manter os alunos atualizados com as novidades do mercado. A região de Ribeirão Preto é privilegiada porque abriga muitas empresas do ramo de TI, mas o profissional também pode atuar em praticamente todos os setores, oferecendo suporte e criando inovações digitais.',
      overview: {
        info: [
          {
            key: 'grade',
            item: 'Grade',
            itemText: 'Bacharelado',
            order: 1,
          },
          {
            key: 'modality',
            item: 'Modalidade do curso',
            itemText: 'Híbrido',
            order: 2,
          },
          {
            key: 'lessons',
            item: 'Lições',
            itemText: '25',
            order: 3,
          },
        ],
      },
      educators: [
        {
          avatar:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
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
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          name: 'Prof. Dr. Jack Crawford',
          title: 'Vice-Coordenador',
        },
      ],
    };
    return data;
  },
};

export default CourseService;
