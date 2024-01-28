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
            className={`${bgColor} px-5 py-2 text-white text-[16px] rounded-[44px] shadow-md hover:scale-105 transition-all duration-200`}>
            {name}
        </button>
    );
};

export default CustomButton;