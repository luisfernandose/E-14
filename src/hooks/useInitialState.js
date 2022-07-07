import { useState } from "react";

const initialState = {
    step1: {
        lugar: null,
        departamento: null,
        municipio: null,
        puesto: null,
        zona: null 
    },
    step2: [
        {
            nombre: "RODOLFO",
            votacion: [0, 0, 0]
        },
        {
            nombre: "JHON MILTON RODRIGUEZ",
            votacion: [0, 0, 0]
        }
    ],
    step1IsValid:false,
    step1Is2Valid:false,
    step1Is3Valid:false,
}

const useInitialState = () => {
    const [ state, setState ] = useState(initialState);


    const addStep1 = (pyload) => {
        setState({
            ...state,
            step1: pyload,
            step1IsValid:true
        })
    }

    const resetStep1 = () => {
        setState({
            ...state,
            step1: initialState.step1,
            step1IsValid:false

        })
    }

    return {
        state,
        addStep1,
        resetStep1
    }
}


export default useInitialState