"use strict";
//Q1
exports.__esModule = true;
function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Call API Create User (1)");
            // resolve("successfully!");
            reject("End");
        }, 1000);
    });
}
function createGroup() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Call API Create Group (2)");
            // resolve("successfully!");
            reject("End");
        }, 1000);
    });
}
function addUserToGroup() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Call API Add User To Group (3)");
            resolve("successfully!");
            // reject("End");
        }, 1000);
    });
}
createUser()
    .then(function (mess) {
    console.log(mess);
    return createGroup();
})
    .then(function (mess) {
    console.log(mess);
    return addUserToGroup();
})
    .then(function (mess) {
    console.log(mess);
})["catch"](function (error) {
    console.log(error);
});
function getData() {
    createUser()
        .then(function (mess) {
        console.log(mess);
        return createGroup();
    })
        .then(function (mess) {
        console.log(mess);
        return addUserToGroup();
    })
        .then(function (mess) {
        console.log(mess);
    })["catch"](function (error) {
        console.log(error);
    });
}
function question1() {
    console.log("question1");
    getData();
}
//Q2
// function asyncRecovery1() {
//     return new Promise(function (resolve, reject) {
//         console.log("asyncRecovery1");
//         // resolve("asyncRecovery1 successfully!");
//         reject("asyncRecovery1 Err");
//     });
// }
// function asyncRecovery2() {
//     return new Promise(function (resolve, reject) {
//         console.log("asyncRecovery2");
//         resolve("asyncRecovery2 successfully!");
//         // reject("asyncRecovery2 Err");
//     });
// }
// function asyncPromise1() {
//     return new Promise(function (resolve, reject) {
//         console.log("asyncPromise1");
//         // resolve("asyncPromise1 successfully!");
//         reject("asyncPromise1 Err");
//     });
// }
// function asyncPromise2() {
//     return new Promise(function (resolve, reject) {
//         console.log("asyncPromise2");
//         resolve("asyncPromise2 successfully!");
//         // reject("asyncPromise2 Err");
//     });
// }
// function asyncPromise3() {
//     return new Promise(function (resolve, reject) {
//         console.log("asyncPromise3");
//         resolve("asyncPromise3 successfully!");
//         // reject("asyncPromise3 Err");
//     });
// }
// function asyncPromise4() {
//     return new Promise(function (resolve, reject) {
//         console.log("asyncPromise4");
//         resolve("asyncPromise4 successfully!");
//         // reject("asyncPromise4 Err");
//     });
// }
// asyncPromise1()
//     .then(function (succ1) {
//         console.log(succ1);
//         asyncPromise2()
//             .then(function (succ2) {
//                 console.log(succ2);
//                 asyncPromise3()
//                     .then(function (succ3) {
//                         console.log(succ3);
//                         asyncPromise4()
//                             .then(function (succ4) {
//                                 console.log(succ4);
//                                 console.log("Xong");
//                             }, function (err4) {
//                                 console.log(err4);
//                                 console.log("Đừng lo lắng gì cả");
//                                 console.log("Xong");
//                             })
//                     }, function (err3) {
//                         console.log(err3);
//                         asyncRecovery1()
//                             .then(function (succReco1) {
//                                 console.log(succReco1);
//                                 asyncPromise4()
//                                     .then(function (succ4) {
//                                         console.log(succ4);
//                                         console.log("Xong");
//                                     }, function (err4) {
//                                         console.log(err4);
//                                         console.log("Đừng lo lắng gì cả");
//                                         console.log("Xong");
//                                     })
//                             }, function (errReco1) {
//                                 console.log(errReco1);
//                                 asyncRecovery2()
//                                     .then(function (succReco2) {
//                                         console.log(succReco2);
//                                         console.log("Xong");
//                                     }, function (errReco2) {
//                                         console.log(errReco2);
//                                         console.log("Đừng lo lắng gì cả");
//                                         console.log("Xong");
//                                     })
//                             })
//                     })
//             }, function (err2) {
//                 console.log(err2);
//                 asyncRecovery1()
//                     .then(function (succReco1) {
//                         console.log(succReco1);
//                         asyncPromise4()
//                             .then(function (succ4) {
//                                 console.log(succ4);
//                                 console.log("Xong");
//                             }, function (err4) {
//                                 console.log(err4);
//                                 console.log("Đừng lo lắng gì cả");
//                                 console.log("Xong");
//                             })
//                     }, function (errReco1) {
//                         console.log(errReco1);
//                         asyncRecovery2()
//                             .then(function (succReco2) {
//                                 console.log(succReco2);
//                                 console.log("Xong");
//                             }, function (errReco2) {
//                                 console.log(errReco2);
//                                 console.log("Đừng lo lắng gì cả");
//                                 console.log("Xong");
//                             })
//                     })
//             })
//     }, function (err1) {
//         console.log(err1);
//         asyncRecovery1()
//             .then(function (succReco1) {
//                 console.log(succReco1);
//                 asyncPromise4()
//                     .then(function (succ4) {
//                         console.log(succ4);
//                         console.log("Xong");
//                     }, function (err4) {
//                         console.log(err4);
//                         console.log("Đừng lo lắng gì cả");
//                         console.log("Xong");
//                     })
//             }, function (errReco1) {
//                 console.log(errReco1);
//                 asyncRecovery2()
//                     .then(function (succReco2) {
//                         console.log(succReco2);
//                         console.log("Xong");
//                     }, function (errReco2) {
//                         console.log(errReco2);
//                         console.log("Đừng lo lắng gì cả");
//                         console.log("Xong");
//                     })
//             })
//     })
exports["default"] = { question1: question1 };
