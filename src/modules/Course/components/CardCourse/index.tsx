import { Badge, Button, Card } from 'flowbite-react';
import type { CardProps } from 'flowbite-react';
import React from 'react';
import { HiArrowRight, HiCheck, HiOutlineCalendar, HiOutlineStar, HiTag } from 'react-icons/hi';
import { ICourse, ICourseDetail } from '../../services/CourseService';

export interface ICardCourseProps extends CardProps {
  course: ICourse;
}

const CardCourseInfo: React.FC<ICourseDetail> = ({ label, value }) => {
  return (
    <div className="flex content-center space-x-2 text-gray-600">
      <HiOutlineCalendar className="w-4 h-4" />
      <span className="font-medium">{label}</span>
      <span className="text-gray-500">{value}</span>
    </div>
  );
};

const CardCourse: React.FC<ICardCourseProps> = ({ course, children, ...props }) => {
  return (
    <Card {...props}>
      <div className="flex justify-between">
        <span>AHC2023</span>
        <div className="flex space-x-5 flewx-row">
          <HiOutlineStar className="w-5 h-5" />
          <HiOutlineCalendar className="w-5 h-5" />
          <Badge color="green" icon={HiCheck}>
            Inscrito
          </Badge>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col space-y-2">
          <h5 className="text-2xl font-bold leading-tight text-gray-900">{course.title}</h5>
          <div className="text-sm font-normal text-gray-500">{children}</div>
        </div>

        {course.details && (
          <div className="flex flex-col my-4 space-y-2">
            {course.details.map((detail: ICourseDetail) => (
              <CardCourseInfo {...detail} key={detail.key} />
            ))}
          </div>
        )}

        <div className="flex my-2 space-x-2 text-sm">
          <Badge size="xs" icon={HiTag}>
            badge
          </Badge>
          <Badge size="xs" icon={HiTag}>
            badge
          </Badge>
          <Badge size="xs" icon={HiTag}>
            badge
          </Badge>
          <Badge size="xs" icon={HiTag}>
            badge
          </Badge>
        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <Button href={`/courses/${course.slug}`} fullSized={true} outline={true}>
            Acessar
            <HiArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CardCourse;
