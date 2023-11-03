import Axios from '../../../services/axios';

export interface IMatrix {
  uuid: string;
  name: string;
  description: string;
  matrixSubjects: IMatrixSubjects[];
}

export interface IMatrixSubjects {
  uuid: string;
  group: string;
  subject: ISubjects[]
}

export interface IRequirements {
  uuid: string;
  name: string;
}

export interface ISubjects {
  uuid: string;
  name: string;
  code: string,
  objective: string,
  is_required: boolean;
  completed: boolean;
  credit: number,
  workload: number,
  requirements: IRequirements[]
}

const CourseMatrixService = {
  async fetchMatrix(slug: string) {
    /*
      Course -> Matrices -> Matrix Subject -> Subject
    */
    const query = '_expand=subject&_expand=matrix';
    const _ = 'matrixSubjects'

    console.log(">>>>> fetchMatrix", slug, query)

    const { data } = await Axios.get<IMatrix>(`/courses/${slug}/matrices`);

    console.log(">>>>> fetchMatrix", data)
    return data;
  },
};

export default CourseMatrixService;
