

let test1 = () => {
    setTimeout(() => {

        console.log("1111111111")
        alert("this is pop after 1")
        console.log("22222222")

    }, 5000)


}


let test2 = () => {
    console.log("3333333333");
}

test1();
test2();