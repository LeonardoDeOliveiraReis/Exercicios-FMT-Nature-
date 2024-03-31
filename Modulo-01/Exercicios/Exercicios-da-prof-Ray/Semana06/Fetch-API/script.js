fetch ("./data.json")
.then ((responsiveObj) => {
    return responsiveObj.json()
})
.then ((responsiveApi)=>{
    console.log(responsiveApi)
})
.catch ((error)=>{
    console.log(error)
})