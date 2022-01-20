import { useState } from "react";
import "../styles/App.scss";
import contactList from "../data/contacts.json";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(contactList); // variable de estado para guardar nuestra lista de contactos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };
  const handleChangeName = (ev) => {
    setName(ev.currentTarget.value);
  };
  const handleChangeLastName = (ev) => {
    setLastName(ev.currentTarget.value);
  };
  const handleChangePhone = (ev) => {
    setPhone(ev.currentTarget.value);
  };
  const handleChangeEmail = (ev) => {
    setEmail(ev.currentTarget.value);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const newContact = {
      name: name,
      lastname: lastName,
      phone: phone,
      email: email,
    };
    setData([...data, newContact]); // data es un array de una variable de estado, por lo que no se puede hacer push, hay que hacerlo con los puntitos para poder modificarlo
    setName("");
    setLastName("");
    setPhone("");
    setEmail("");
  };

  const filterData = data.filter((oneContact) =>
    oneContact.name.toLowerCase().includes(search.toLowerCase())
  ); // filtar el data para que muestre los que busca la usuaria con el nombre, en el input de búsqueda

  // En esta caso el filer y el map se podrían concatenar. El map debe ser el último siempre porque es el que pinta.

  const htmlContact = filterData.map(
    (
      contact,
      index // map para pintar el listado interpolando los datos y él recorre el listado las veces que son necesarias
    ) => (
      <li className="contact__item" key={index}>
        <p className="contact__name">
          <label className="contact__label">Nombre:</label>
          {contact.name} {contact.lastname}
        </p>
        <p className="contact__phone">
          <label className="contact__label">Teléfono:</label>
          <a href={`tel:${contact.form}`} title="Pulsa aquí para llamar a Lola">
            {contact.phone}
          </a>
        </p>
        <p className="contact__mail">
          <label className="contact__label">Email</label>
          <a
            href={"mailto:" + contact.email} // otra forma de interpolar datos en un atributo, diferente a la que hemos hecho con el teléfono
            title="Pulsa aquí para escribir a Lola"
          >
            {contact.email}
          </a>
        </p>
      </li>
    )
  );

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange={handleChangeSearch}
            value={search}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{htmlContact}</ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onChange={handleChangeName}
            value={name}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            onChange={handleChangeLastName}
            value={lastName}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            onChange={handleChangePhone}
            value={phone}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChangeEmail}
            value={email}
          />
          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir"
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
