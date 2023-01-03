import create from "zustand";

export const useCode = create( (set, get) => ({
    code : ['', '', '', '', '', '', '', ''],
    setCode : (newCode) => {
        set({code: [...newCode]})
    },
    updateCode: (newEl, index) => {
        const updated = get().code
        updated[index] = newEl;
        set({code : [...updated]})
    },
    setCodeToDefault: () => {
        set({code: ['', '', '', '', '', '', '', '']})
    }
}))


// export default useCode;