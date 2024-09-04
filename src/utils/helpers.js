export const delay = (delayInms = 5000) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms))
}

export const getOffset = (page, limit) => {
    return (page - 1) * limit
}
