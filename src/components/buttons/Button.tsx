interface ButtonProps
{
    name: string;
    bgColor: string;
}

const CustomButton = (props:ButtonProps ) =>
{
    const { name, bgColor } = props;
    return (
        <button
            className={`${bgColor} px-4 py-2 text-white text-[16px] rounded-xl`}>
            {name}
        </button>
    );
};

export default CustomButton;