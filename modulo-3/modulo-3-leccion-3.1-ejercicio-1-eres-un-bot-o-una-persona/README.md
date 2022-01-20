#  Eres un bot o una persona

Te habrá pasado muchas veces que cuando te registras en una página te aparece un componente para comprobar si eres una persona o un bot. Ese componente nos hace una pregunta que en teoría solo un ser humano podría responder bien. Vamos a programarlo:

1. Crea un nuevo ejercicio desde tu React starter kit.
2. Crea el HTML de la página con:
    - Un título que sea "Selecciona los ingredientes de la tortilla de patatas".
    - Y un formulario con checkboxes para des / marcar estos ingredientes:
        - Macarrones
        - Patatas
        - Nuecess
        - Huevos
        - Cebolla
        - Cerveza
3. A continuación programa la funcionalidad que haga que si la usuaria selecciona solo los ingredientes Patatas, Huevos y Cebolla aparezca un párrafo con el texto "Eres una persona concebollista". En cualquier otro caso el texto de este párrafo debe ser "Eres un robot sin paladar".

Cada vez que tengas que hacer un ejercicio lo primero que debes pensar es:
- Qué datos necesito guardar en el estado de React y cuáles no.
- Qué tipo de datos son.

Pista: en este caso los datos que debemos guardar en el estado son solo los datos que la usuaria puede cambiar.