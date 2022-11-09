export type overviewInfo = {
  key: string;
  item: string;
  itemText: string;
  order: number;
};

const CourseOverviewService = function () {
  return {
    title: 'Sistemas de Informação',
    subtitle: 'O caminho para a sua formação profissional e pessoal. ',
    course_presentation: {
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
      description:
        'A área de tecnologia da informação está em constante crescimento, sempre com oportunidades para os profissionais do ramo. O curso de Sistemas de Informação da USP proporciona aos alunos uma formação sólida de desenvolvimento de software, com toda a estrutura necessária para o ensino. Como é uma área muito dinâmica, o curso também realiza palestras, cursos e demais eventos ao longo da graduação para manter os alunos atualizados com as novidades do mercado. A região de Ribeirão Preto é privilegiada porque abriga muitas empresas do ramo de TI, mas o profissional também pode atuar em praticamente todos os setores, oferecendo suporte e criando inovações digitais.',
    },
  };
};

export default CourseOverviewService;
