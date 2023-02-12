function deleteNth(arr,n){
    let instances = {}
    return arr.filter(element =>{
      instances[element] = (instances[element] || 0) + 1
      return instances[element] <= n
    })
    }

//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript