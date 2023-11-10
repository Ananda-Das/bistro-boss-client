/* eslint-disable react/prop-types */


const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center w-2/5 mx-auto">
            <p className="text-[#D99904] text-xl italic mb-4">---{subHeading}---</p>
            <h1 className="text-[#151515] text-4xl py-5 border-y-2  px-14">{heading}</h1>
        </div>
    );
};

export default SectionTitle;