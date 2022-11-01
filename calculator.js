
function add(){
    let foo = prompt('first number');
    let a = foo
    let boo = prompt("operator put 1 for +, 2 for -, 3 for *, 4 for /, 5 for **")
    let b = boo
    let coo = prompt('second number')
    let c = coo
    console.log(b)
    if (b == 1) {
        alert(parseInt(a) + parseInt(c))
        document.getElementById("number").innerHTML = parseInt(a) + parseInt(c);
    } else {
        if (b == 2) {
            alert(parseInt(a) - parseInt(c))
            document.getElementById("number").innerHTML = parseInt(a) - parseInt(c);
        } else {
            if (b == 3) {
                alert(parseInt(a) * parseInt(c))
                document.getElementById("number").innerHTML = parseInt(a) * parseInt(c) 
            } else {
                if (b == 4) {
                    alert(parseInt(a) / parseInt(c))
                    document.getElementById("number").innerHTML = parseInt(a) / parseInt(c)
                } else {
                    if (b == 5) {
                        alert(parseInt(a) ** parseInt(c))
                        document.getElementById("number").innerHTML = parseInt(a) ** parseInt(c)
                    } else {
                        return
                    }
                }
            }
        }
    }
    
}