import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CourseService, { ICourse } from '../../services/CourseService';

const CoursesList: React.FC = () => {
  const [courses, setCourseList] = useState<Array<ICourse>>([]);

  const fetchCourses = (): void => {
    CourseService.fetchCourses('fields=title,slug').then((response): void => {
      setCourseList(response.data);
    });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <ul>
      {courses &&
        courses.map((course) => {
          return (
            <li key={course.slug}>
              <Link key={course.slug} to={course.slug}>
                {course.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default CoursesList;
