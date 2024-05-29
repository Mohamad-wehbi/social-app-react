
export const validator = (err) =>{

    const validationErrors = {};
    if(err) err.details.forEach(detail => validationErrors[detail.path[0]] = detail.message);
    return {validationErrors, err};
    
}