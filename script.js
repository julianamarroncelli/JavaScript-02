const students = [
  {
    name:"Alice",
    firtsTest: 6,
    secondTest: 7
  },
  {
    name:"Lucas",
    firtsTest: 3,
    secondTest: 5,
  },
  {
    name:"Ari",
    firtsTest: 8,
    secondTest: 7,
  }
 
]
function average (nome, n1,n2){
  let cal = (n1 + n2) / 2 
  if (cal >= 7){
    alert(`Olá, ${nome}! Você foi aprovado (a)! \nSua média foi de ${cal}. \nParabéns! :)`)
  } else {
    alert(`Olá, ${nome}! \nNão foi desta vez, sua média foi de ${cal}.\nTente novamente. :)`)
  }    
}

for (student of students) { 
  average (student.name,student.firtsTest,student.secondTest)
}  