document.querySelector(".container").addEventListener("click", (e)=>{
    alert("container is clicked...")
})
document.querySelector(".content").addEventListener("click", (e)=>{
    e.stopPropagation()
    alert("content is clicked...")
})
document.querySelector(".subcontainer").addEventListener("click", (e)=>{
    alert("subcontainer is clicked...")
})