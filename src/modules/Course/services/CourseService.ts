import Axios from '../../../services/axios';

export interface ICourseDetail {
  key: string;
  label: string;
  value: string;
  order: number;
}

export interface IEducator {
  avatar: string;
  name: string;
  title: string;
}

export interface IGallery {
  img: string;
  text: string;
}
export interface ICourse {
  id: number;
  uuid: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  educators: IEducator[];
  gallery: IGallery[];
  details: ICourseDetail[];
}

const CourseService = {
  async fetchCourses(query?: string) {
    const response = await Axios.get<Array<ICourse>>(`/courses?${query}`);

    return response.data;
  },

  async fetchCourse(slug: string, query?: string) {
    const formattedQuery = query ? `?${query}` : '';
    const response = await Axios.get<ICourse>(`/courses/${slug}${formattedQuery}`);

    return response.data;
  },

  async getCourseWithNavbar(slug: string, query?: string) {
    const response = await CourseService.fetchCourse(slug, query);

    return {
      navbarItems: [
        { label: 'Apresentação', route: `/courses/${slug}` },
        { label: 'Acessar turmas', route: `/courses/${slug}/classrooms` },
        {
          label: 'Inscrição nas turmas',
          route: `/courses/${slug}/classrooms/subscription`,
        },
        {
          label: 'Matriz Curricular',
          route: `/courses/${slug}/matrix`,
        },
      ],
      ...response,
    };
  },
};

export default CourseService;
