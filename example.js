// const p1 = new Promise((success) => {
//     console.log('INIT P1');
//     setTimeout(() => {
//         success('JavaScript')
//     }, 1000)
// })

// const p2 = new Promise((success, error) => {
//     console.log('INIT P2');
//     setTimeout(() => {
//         error('TypeScript Error')
//     }, 2000)
// })

// const p4 = new Promise((success) => {
//     console.log('INIT P4');
//     setTimeout(() => {
//         success('NodeJS')
//     }, 4000)
// });
//
// setTimeout(()=>{
//     p1.then((data)=>{
//         console.log(data)
//     })
//     p1.then((data)=>{
//         console.log(data)
//     })
//     p1.then((data)=>{
//         console.log(data)
//     })
//     p1.then((data)=>{
//         console.log(data)
//     })
// }, 6000)

// async function getData() {
//     try {
//         const res1 = await p1;
//        // const res2 = await p2;
//         const res4 = await p4;
//         console.log(res1, res4)
//     } catch (err) {
//         console.log(err)
//     }
//
// }
//
// getData();

// Promise.race([p1, p4, p2])
//     .then((arr)=>{
//
//         console.log(arr)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// const p3 = p1
//     .then((data)=>{
//         console.log('Step 1 =>', data)
//     })
//     .then((data)=>{
//         console.log('Step 2 =>', data)
//     })
//     .then((data)=>{
//        return p2
//     })
//     .then((data)=>{
//         console.log('Step 4 =>', data)
//     })
//     .then((data)=>{
//         console.log('Step 5 =>', data)
//     })
//     .then((data)=>{
//         console.log('Step 6 =>', data)
//     })
//     .then((data)=>{
//         console.log('Step 7 =>', data)
//     })
//     .catch((err)=>{
//         console.log(err);
//         return 'TypeScript without error'
//     });


// console.log('start');
// setTimeout(()=>console.log('timeout 1'));
// setTimeout(()=>console.log('timeout 2'));
// Promise.resolve().then(()=>console.log('promise 1'));
// Promise.resolve().then(()=>console.log('promise 2'));
// console.log('end');

// ('start','end', 'promise 1','promise 2')--('timeout 1')--('timeout 2')--()--()
