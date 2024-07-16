import { useState } from "react"

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(etapa,e) {
       if(e) e.preventDefault();

        if(etapa < 0 || etapa >= steps.length) return;

        setCurrentStep(etapa);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
    };
}