function display(num){
    result.value+=num  //result.value=result.value+num
}
function allclear(){
    result.value=''
}
function evaluvateexp(){     //s='(5+10)/2'   eval(s)
// exp=result.value
// res=eval(exp)
// result.value=res
result.value=eval(result.value)
}
function removeElement(){
    curr_exp=result.value
    result.value=curr_exp.slice(0,-1)
}
//s='hello'
//
//slicing
//s.slice(starting index,ending index)  eg s.slice(0,3)  o/p=hel  