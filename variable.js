function solution(arr1, arr2) {
    var answer = [];
    
    arr1.map(a=>{
        arr2.map(b=>{
            if(a.length > 1 && b.length>1){
                console.log(typeof(a[0]))
                answer.push([a[0]+b[0],a[1]+b[1]])
            }else{
                answer.push([a[0]+b[0]])
            }
        })
    })
    console.log(answer)
    return answer;
}