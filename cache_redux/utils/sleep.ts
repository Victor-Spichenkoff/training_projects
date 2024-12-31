export const Sleep =(time: number) =>
    new Promise(resolve => setTimeout(resolve, time))
