import React, { useEffect, useState } from 'react';
import ClassRow from './classRow/ClassRow';
import StudentsRow from './studentsRow/StudentsRow';

interface Student {
  id: number;
  name: string;
  grade: string;
  percentage: string;
}

interface ClassData {
  name: string;
  students: Student[];
}

const StudentsResult = () => {
  const [classesData, setClassesData] = useState<ClassData[]>([]);

  useEffect(() => {
      const fetchData = async () =>
      {
          try
          {
              const res = await fetch( '/src/assets/data.json' );
              const data = await res.json();
              console.log( data );
              setClassesData( data.classes );
          }
          catch ( error )
          {
              console.error( 'Error fetching data:', error, error.message );
          }
      };

    fetchData();
  }, []);

  return (
    <div className="max-w-[848px] mx-auto overflow-auto text-white">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {classesData.map((classData, index) => (
            <React.Fragment key={index}>
              <ClassRow className="bg-white/5" name={classData.name} />
              {classData.students.map((student) => (
                <StudentsRow
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  grade={student.grade}
                  percentage={student.percentage}
                />
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsResult;