/*let user = {
  id: 1,
  email: "bancho@codigo.co",
  name: "bancho",
  activo: true,
  recuperarClave: function () {
    console.log("Recuperar clave....");
  },
};*/

function crearUsuario(name, email) {
  return {
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log("Recuperar clave....");
    },
  };
}

let user1 = crearUsuario("Bancho", "bancho@codigo.co");
let user2 = crearUsuario("Bancho2", "bancho2@codigo.co");

console.log(user1, user2);
