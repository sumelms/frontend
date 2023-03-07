import React, { useEffect, useState } from 'react';
import CourseService, { ICourse } from '../../services/CourseService';
import CardCourse from '../../components/CardCourse';

const CoursesList: React.FC = () => {
  const [courses, setCourseList] = useState<Array<ICourse>>([]);

  const fetchCourses = (): void => {
    CourseService.fetchCourses('fields=title,slug').then((response): void => {
      setCourseList(response);
    });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container flex gap-4">
      {courses &&
        courses.map((course) => {
          return (
            <CardCourse key={course.slug} course={course} imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              {course.description}
            </CardCourse>
          );
        })}
    </div>
  );
};

export default CoursesList;
