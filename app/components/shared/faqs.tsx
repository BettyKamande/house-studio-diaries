"use client";
import questions from "@/app/utils/faqQuestions";
import { useState } from "react";
import {RxCaretDown, RxCaretUp} from "react-icons/rx";

const FAQS = () => {
    const [expandedQn, setExpandedQn] = useState<number | null>(null);
    const toggleExpander = (index: number) => {
        setExpandedQn(prev => (prev === index && prev !== null ? null: index));
    }
    return (
        <div className="flex flex-col gap-10 p-5 items-center text-primary sm:p-10 lg:p-20 ">
            <h2 className="text-4xl font-extrabold font-merriweather sm:text-5xl lg:w-max">FAQs</h2>
            <div className="flex flex-col justify-center items-center gap-5 w-full lg:w-2/3 ">
                {questions.map((question, index) => (
                    <div className="p-5 border-b border-secondary cursor-pointer flex flex-col w-full gap-2" key={question.id} onClick={() => {toggleExpander(index)}} >
                        <div className="flex h-6 justify-between items-center">
                            <p className="lg:font-medium mb-2 ">{question.qn}</p>
                            <div className="text-secondary">
                                {expandedQn === index ? <RxCaretUp size={40} /> :<RxCaretDown  size={40} />}
                            </div>
                        </div>
                        <div className={`w-full text-justify font-medium  text-sm text-secondary ${expandedQn === index ? 'block': 'hidden'} lg:w-11/12`}>
                            {question.ans}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQS;