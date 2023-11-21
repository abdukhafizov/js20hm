// function checkAge(age){
//     let age_prmt = +prompt("age")

//     if (age_prmt >= 18) {
//         alert("ok")
//     }else if(age_prmt <= 18){
//         alert("no")
//     } else{
//         alert("дебил")
//     }
// }

// checkAge()


// function max_name(name, name2, name3) {



// }

// max_name('Alex', 'George', 'Michael')



function max_name(name, name2, name3) {
    let names = [name, name2, name3]
    let longestWord = 0;


    for (let i = 0; i < names.length; i++) {
        if (names[i].length > longestWord) {
            longestWord = names[i].length;
        }

        if (names[i].length === longestWord) {
            console.log(longestWord);
            console.log(names[i]);
        }
    }

    // for (let item of names) {


    //     let len = String(item).length

    //     n1.push(len)

    //     names[item];

    //     if (n1 <= len) {
    //         console.log(n1);
    //     }
    // }
}



max_name('Michael','Alex', 'George', );
