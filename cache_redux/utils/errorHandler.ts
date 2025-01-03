export const ErrorHandler = (err: unknown) => {
    if(typeof err === "string")
        return err

    return "Algo deu errado!"
}