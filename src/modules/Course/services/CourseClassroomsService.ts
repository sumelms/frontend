import { HiCalendar, HiClock, HiInbox, HiTable, HiUser } from 'react-icons/hi';

import Axios from '../../../services/axios';

export interface IFilter {
  name: string;
  uuid: string;
}

export interface IFilterOptions {
  id: string;
  name: string;
  value: string;
}

export interface IFilterSection {
  id: string;
  name: string;
  options?: IFilterOptions[];
}

export interface IClassroomDetail {
  key: string;
  label: string;
  value: string;
}

export interface IClassroom {
  name: string;
  uuid: string;
  category: IFilter;
  modality: IFilter;
  details: IClassroomDetail[];
}

const CourseClassroomsService = {
  async fetchFilters() {
    const { data: categories } = await Axios.get<Array<IFilter>>(
      '/categories?fields=uuid,name',
    );
    const { data: modalities } = await Axios.get<Array<IFilter>>(
      '/modalities?fields=uuid,name',
    );

    const filters: IFilterSection[] = [
      {
        id: 'category',
        name: 'Categoria',
        options: categories.map((item) => ({
          id: item.name,
          name: item.name,
          value: item.uuid,
        })),
      },
      {
        id: 'modality',
        name: 'Modalidade',
        options: modalities.map((item) => ({
          id: item.name,
          name: item.name,
          value: item.uuid,
        })),
      },
    ];

    return filters;
  },

  async fetchClassrooms(slug: string) {
    const query = '_expand=modality&_expand=category';
    const { data } = await Axios.get<Array<IClassroom>>(
      `/courses/${slug}/classrooms?${query}`,
    );

    return data;
  },
};

export default CourseClassroomsService;
