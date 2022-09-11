const color = ["#b33a3a","#ff6700","#32cd32"]

export default (priority)=>{
    const level = ["High","Medium",'Low']
    return{
        level:(level[priority-1]),
        color:color[priority-1]
    }
}