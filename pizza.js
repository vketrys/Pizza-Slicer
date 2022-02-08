let clone 
document.getElementById('load-btn').addEventListener('click', () => {
  document.getElementById('app').innerHTML = 'waiting...'
  
  fetch('https://gp-js-test.herokuapp.com/pizza')
    .then((response) => response.json())
    .then(data => {
    let guestCounter = data.party.length
    document.getElementById('guest').innerHTML = guestCounter + ' - all guests'  // the number of party participants

    let eats = data.party.filter(function(s) {return s.eatsPizza}).length
    document.getElementById('eatsPizza').innerHTML = eats + ' - eats pizza'   // the number of pizza eaters

    document.getElementById('app').innerHTML = ''                            // hiding 'waiting'
    document.getElementById('pizza').style.display = 'block'                 // showing pizza

    let pizza = document.getElementById('pizza')
    let slice = pizza.querySelector('#slice')

    let x = 360/eats                                                        // angle for radius
   
    let i = document.getElementById('pizza').children.length                // number of slices
    while (i < eats){
      clone = slice.cloneNode()
      clone.style.transform = `rotate(${x*i}deg)`
      pizza.appendChild(clone)
      i++
    }
  })
})
