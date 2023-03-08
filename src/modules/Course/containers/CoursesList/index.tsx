import React, { useEffect, useState } from 'react';
import CourseService, { ICourse } from '../../services/CourseService';
import CardCourse from '../../components/CardCourse';

const CoursesList: React.FC = () => {
  const [courses, setCourseList] = useState<Array<ICourse>>([]);

  const fetchCourses = (): void => {
    CourseService.fetchCourses('fields=title,slug,excerpt').then((response): void => {
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
          console.log(course);
          return (
            <CardCourse
              className="w-1/2"
              key={course.slug}
              course={course}
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              {course.excerpt}
            </CardCourse>
          );
        })}
    </div>
  );
};

export default CoursesList;
