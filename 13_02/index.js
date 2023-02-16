const user = require('./data.json')


//calcule a diferença de tempo sendo dev entre os usuários
//mostre o dev mais novo e o dev mais antigo (usar operadores para localizá-los)
//mostre a diferença do de tempo de programação do daniel para seu time (vejam o forEach do JS)

// console.log(user)
// node src/index.js

    // user.team.forEach( dev => {
    //     if (user.dev_since < dev.dev_since){
    //      const diff = dev.dev_since - user.dev_since;
     
    //      console.log(`${user.name} é mais velho ${diff} anos do que ${dev.Name} na área de programação`)
    //     } else {
    //      const diff = user.dev_since - dev.dev_since;
     
    //      console.log(`${user.name} é mais novo ${diff} anos do que ${dev.Name} na área de programação`)
    //     }
    //  })
     
// --------------------------------------------------------------------------------------------


// user.team.forEach( dev => {

//     // console.log(dev.born_info.year)
//     const devUser = [ dev.Name, dev.born_info.year ]
//     const userDev = [ user.name, user.born_info.year]

//     console.log(devUser)
//     console.log(userDev)

// })

// -----------------------------------------------------------------------------------------------------------

// let userAge = [];
// let userName = [];
// // idade
// user.team.forEach( dev => {

//     const userDev =  { name:dev.Name , year:dev.born_info.year } 
//     const currentYear = new Date().getFullYear()
//     const ageDiff = currentYear - userDev.year;

//    userAge.push(ageDiff)
//     userName.push(dev.Name)
// }); 
// const currentYear = new Date().getFullYear()
// const userAgeDiff = currentYear - user.born_info.year;

// userAge.push(userAgeDiff)
// userName.push(user.name)

// const menoridade = Math.min(...userAge)
// const maioridade = Math.max(...userAge)

// console.log(`${userName.at(userAge.indexOf(menoridade))} é o mais novo com ${menoridade} anos`)
// console.log(`${userName.at(userAge.indexOf(maioridade))} é o mais velho com ${maioridade} anos`)

// ---------------------------------------------------------------------------------------------------------------
//calcule a diferença de tempo sendo dev entre os usuários

let allUsers = []

allUsers.push({
   "name": user.name,
   "dev_since": user.dev_since   
})

user.team.forEach( dev => {

   allUsers.push({
      "name": dev.Name,
      "dev_since": dev.dev_since
   })
})

allUsers.forEach( dev => {
   allUsers.forEach( us => {

      const diffNeg = dev.dev_since - us.dev_since

      if (dev.name != us.name && diffNeg >=0) {
         const diffNeg = dev.dev_since - us.dev_since
         console.log(`us ${us.name} programa a ${diffNeg} anos a mais que ${dev.name}`)

         const diffPos = us.dev_since - dev.dev_since

         if (dev.name != us.name && diffPos >= 0) {
            const diffPos = us.dev_since - dev.dev_since
            console.log(`${dev.name} programa a ${diffPos} anos a mais que ${us.name}`)
         }
      } 
   })
})