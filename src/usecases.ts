const makeUseCases = () => {
    return {
        add: (array1: number[], array2: number[]) => {
            if(array1 instanceof Array && array2 instanceof Array){
                var str = ""
                var str2 = ""
                const arr = array1.map((number) => {
                    if(typeof number !== "number"){
                        throw new Error("The Array1 is not an array of numbers")
                    }
                    str = `${str}${number}`
                    return str
                })
                const arr2 = array2.map((number) => {
                    if(typeof number !== "number"){
                        throw new Error("The Array2 is not an array of numbers")
                    }
                    str2 = `${str2}${number}`
                    return str2
                })
    
                const sum = Number(arr[arr.length - 1]) + Number(arr2[arr2.length - 1])
    
                const result = sum.toString().split("").map((str) => {
                    return Number(str)
                })
    
                return result
            }else{
                throw new Error("The Array1 or/and Array2 is not an Array")
            }
        }

    }
}

// Here you can Inject Dependecies
const usecases = makeUseCases()


export default usecases