import { BsBook } from "react-icons/bs";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";

import InquiryForm from "./InquiryForm";

const InquirySection = () => {
  return (
    <section className="relative grid grid-cols-2 gap-2 px-6 py-6">
      <div className="ml-16 mt-5">
        <strong className="text-xl relative uppercase text-green inline left-[5%]  font-semibold">
          <span className="absolute bottom-[35%] left-[-35%] font-extrabold">
            _____
          </span>{" "}
          HOW TO START{" "}
        </strong>
        <h2 className="capitalize text-5xl font-bold -ml-6 py-4 leading-snug ">
          Begin with our{" "}
          <span className=" text-green border-b border-spacing-2 cursor-pointer">
            Cost-Free
          </span>
          <br />
          Seminars
        </h2>
        <p className="-ml-6 w-3/4">
        Appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles
        </p>
        <div className="flex flex-col gap-1 -ml-7 mt-5">
        <strong className="text-green font-bold text-xl flex items-center gap-3"> <BsBook  color= {'black'} size={'30px'}/> We offer hand on instructions</strong>
        <strong className="text-green font-bold text-xl flex items-center gap-3"> <BsPersonArmsUp  color= {'black'} size={'30px'}/>100% placement assemet</strong>
        <strong className="text-green font-bold text-xl flex items-center gap-3"><LiaFileContractSolid  color= {'black'} size={'30px'}/>
         Tailor made cources</strong>
        <strong className="text-green font-bold text-xl flex items-center gap-3"> 
        <FaComputer  color= {'black'} size={'30px'}/>Real time project</strong>
        </div>

      </div>
      <div className="mt-5">
        <InquiryForm />
      </div>
    </section>
  );
};

export default InquirySection;
