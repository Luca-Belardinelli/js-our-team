// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
// Bonus
// Rendere l’esercizio responsive, mandando a capo le cardBuon Lavoro .. e buon w-e 



const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// varibiale per richiamare il contenitore scritto in html
const team = document.getElementById('imgteam');

// varibale per inserire tutti gli oggetti 
let user = '';

// ciclo per i singoli oggetti
for (let i = 0; i <teamMembers.length; i++){

  memberIesimo = teamMembers[i];

  const {name, role, email, img} = memberIesimo;

  user += `    
  <div class="team-card">
      <div class="card-image">
          <img src="${img}" alt="${name}" />
      </div>
      <div class="card-text">
          <h3>${name}</h3>
          <p>${role}</p>
          <a href="#">${email}</a>
      </div>
  </div>
 `

}

// ouput
team.innerHTML = user;
