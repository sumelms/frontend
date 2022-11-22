const ClassroomService = {
  getPage(uid: string) {
    return {
      title: 'Cálculo I',
      subtitle: 'Código da disciplina: SI22CAI023',
      headerItems: [
        {
          key: 'load',
          label: '90',
          value: 'horas',
          order: 1,
        },
        {
          key: 'exams',
          label: '8',
          value: 'provas',
          order: 2,
        },
        {
          key: 'date',
          label: new Date().getDate().toLocaleString(),
          order: 3,
        },
      ],
    };
  },
};

export default ClassroomService;
