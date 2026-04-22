//Selectionner les élements

const form = document.getElementById("formulaire");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const mdp = document.getElementById("mdp");
const confirm = document.getElementById("confirm");
const btn = document.getElementById("btn");

//ecouter l'evenenemt sur l'input

//Validation en temps réel
nom.addEventListener("input", validerNom);
email.addEventListener("input", validerEmail);
mdp.addEventListener("input", validerMdp);
confirm.addEventListener("input", validerConfirm);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isValideNom = validerNom();
  const isValideEmail = validerEmail();
  const isValideMdp = validerMdp();
  const isValideConfirm = validerConfirm();

  if (isValideMdp && isValideConfirm && isValideEmail && isValideNom) {
    alert("Le formulaire est soumis avec succès");
    form.reset();
    document
      .querySelectorAll("input")
      .forEach((i) => i.classList.remove("valide"));
    document.querySelectorAll(".message").forEach((m) => (m.textContent = ""));
  }
});

function validerNom() {
  if (nom.value.length < 3) {
    afficherErreur(nom, "msg-nom", "Le nom doit faire au moins 3 caractères");
    return false;
  }
  afficherSuccess(nom, "msg-nom");
  return true;
}

function afficherErreur(input, idMsg, texte) {
  input.classList.add("invalide");
  input.classList.remove("valide");
  const msg = document.getElementById(idMsg);
  msg.textContent = texte;
  msg.className = " message erreur";
}

function afficherSuccess(input, idMsg, texte = "✔ Valide") {
  input.classList.add("valide");
  input.classList.remove("invalide");
  const msg = document.getElementById(idMsg);
  msg.textContent = texte;
  msg.className = " message sucess";
}

function validerEmail() {
  const v = email.value.trim();

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(v)) {
    afficherErreur(email, "msg-email", "Email invalide");
    griserBtn();
    return false;
  }
  afficherSuccess(email, "msg-email");
  return true;
}

function validerMdp() {
  if (mdp.value.length < 6) {
    afficherErreur(mdp, "msg-mdp", "6 caracteres au minumus");
    griserBtn();
    return false;
  }
  afficherSuccess(mdp, "msg-mdp");
  return true;
}

function validerConfirm() {
  if (confirm.value === "" || confirm.value !== mdp.value) {
    afficherErreur(confirm, "msg-confirm", "Les mots de passe diffèrent");
    griserBtn();
    return false;
  }
  afficherSuccess(confirm, "msg-confirm");
  return true;
}

function griserBtn() {
  btn.setAttribute("disabled", "disabled");
}
