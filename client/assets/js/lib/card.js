const createCard = () => {
  try {
    // CREATION DE LA CARD
    const cardContainer = document.createElement("div");
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    fetch("http://localhost:8080/api/users")
      .then((res) => res.json())
      .then((users) => { 
        users.forEach((user) => {
          // CREATION DES ELEMENTS
          const card = document.createElement("div");
          const cardPrenom = document.createElement("p");
          const cardNom = document.createElement("p");
          const cardEmail = document.createElement("p");
          const cardAge = document.createElement("p");
          const cardAdresse = document.createElement("p");
          const cardAvatar = document.createElement("img");
          //  ATTRIBUTION DES IDs
          card.id = "card";
          cardPrenom.id = "cardPrenom";
          cardNom.id = "cardNom";
          cardEmail.id = "cardEmail";
          cardAge.id = "cardAge";
          cardAdresse.id = "cardAdresse";
          cardAvatar.id = "cardAvatar";
          // AJOUT DU CONTENU
          cardPrenom.textContent = user.prénom;
          cardNom.textContent = user.nom;
          cardEmail.textContent = user.email;
          cardAge.textContent = user.age + " ans";
          cardAdresse.textContent =
            user.adresse.rue +
            ", " +
            user.adresse.ville +
            ", " +
            user.adresse.pays;
          cardAvatar.src = `./client/assets/img/${user.prénom.toLowerCase()}.svg`;
          // AFFICHAGE DES ELEMENTS
          cardContainer.append(card);
          card.append(
            cardPrenom,
            cardNom,
            cardEmail,
            cardAge,
            cardAdresse,
            cardAvatar
          );
        });
      });
  } catch (error) {
    console.log("FETCH PROBLEM : " + error);
  }
};

export { createCard };
