import { Badge, Button, Card } from 'flowbite-react';
import type { CardProps } from 'flowbite-react';
import React from 'react';
import { HiArrowRight, HiCheck, HiOutlineCalendar, HiOutlineStar, HiTag } from 'react-icons/hi';
import { ICourse } from '../../services/CourseService';

export interface ICardCourseProps extends CardProps {
  course: ICourse;
}

const CardCourseInfo = () => {
  return (
    <div className="flex content-center space-x-2 text-gray-600">
      <HiOutlineCalendar className="w-4 h-4" />
      <span className="font-medium">Data:</span>
      <span className="text-gray-500">01/02/2023 à 12/12/2023</span>
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
        <div className="flex space-y-2">
          <h5 className="text-2xl font-bold leading-tight text-gray-900">{course.title}</h5>
          <div className="text-sm font-normal text-gray-500">{children || course.description}</div>
        </div>

        <div className="flex flex-col my-4 space-y-2">
          <CardCourseInfo />
          <CardCourseInfo />
          <CardCourseInfo />
        </div>

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
        <div className="flex">
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
