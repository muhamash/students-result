
interface ClassRowProps
{
    className: string;
    name: string;
}

const ClassRow = ( props: ClassRowProps ) =>
{
    const { className, name } = props;
    return (
        <tr className={className}>
            <td colSpan={4} className="p-5 text-sm md:text-xl">
                {name}
            </td>
        </tr>
    );
};

export default ClassRow;