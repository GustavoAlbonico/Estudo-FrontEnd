import { FormEvent, ReactElement, useState } from "react";

export function useForm(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState<number>(0);

    function changeStep(etapa:number,e?:FormEvent) { 
       if(e) e.preventDefault();

        if(etapa < 0 || etapa >= steps.length) return;

        setCurrentStep(etapa);
    }

    return {
        changeStep,
        currentComponent: steps[currentStep],
        currentStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
    };
}