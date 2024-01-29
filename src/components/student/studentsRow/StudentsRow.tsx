interface StudentRowProps
{
    id: number;
    name: string;
    grade: string;
    percentage: string;
}

const StudentsRow = (props:StudentRowProps) =>
{
    const { id, name, grade, percentage } = props;
    return (
        <tr className="border-b border-[#7ECEB529] hover:translate-x-3 transition-all duration-200">
            <td className="p-4 text-sm md:text-xl">{id}</td>
            <td className="p-4 text-sm md:text-xl">
                <div className="flex space-x-2 items-center">
                    <img className="w-8 h-8" src="vite.svg" width="32" height="32" alt={name} />
                    <span className="whitespace-nowrap">{name}</span>
                </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">{grade}</td>
            <td className="p-5 text-sm md:text-xl text-center">{percentage}</td>
        </tr>
    );
};

export default StudentsRow;