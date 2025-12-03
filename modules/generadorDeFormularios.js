"use strict";

//Lamento mucho la redundáncia del código, evidentemente podría haberlo planteado con funciones reutilizables, pero una vez empezado así, me he puedo ha hacerlo y han empezado a darme algunos errores, tenía que cambiar muchas cosas que habían quedado fuera de contexto. La próxima vez, plantearé el ejercicio directamente con una mejor estructura.

//Por otra parte, no he caido en que las labels se generarían también con el select y había ido creando labels para cada campo, he decidido dejarlas en el código, pero no las añado al newForm (sorry), en adelante, estaré más atento a las especificaciones.

export function iniciarGeneradorDeFormularios() {
    const selectForm = document.getElementById("selectForm");
    const formularioCreacion = document.getElementById("formularioCreacion");

    //Añado un listener al select para cuando el usuario elija una acción
    selectForm.addEventListener("change", () => {
        //He inclido esta limpieza para que no acumule campos al cambiar el select
        divTemp.innerHTML = "";

        const seleccionado = selectForm.value;
        console.log(seleccionado);

        //Si el usuario elije text
        if (seleccionado === "text") {

            //Creo el campo para que el usuario introduzca el id
            const inputTextUser = document.createElement("input");
            const divTemp = document.getElementById("divTemp");
            inputTextUser.type = "text";
            inputTextUser.id = "inputTextUser";

            const labelImputUser = document.createElement("label");
            labelImputUser.htmlFor = "inputTextUser";
            labelImputUser.textContent = "intrudce el nombre (id) del campo de texto:";

            //Creo un botón para confirmar el id del usuario
            const botonAceptarId = document.createElement("button");
            botonAceptarId.classList.add("botonAceptar");
            botonAceptarId.textContent = "Aceptar";
            botonAceptarId.type = "button";

            //Meto todos los elementos en el form
            divTemp.append(labelImputUser, inputTextUser, botonAceptarId);

            //Me he dado cuenta que esta línea no la necesito, pero la dejo por si acaso.
            //formularioCreacion.append(divTemp);

            //Añado la funcionalidad del botón para cambiar el id
            botonAceptarId.addEventListener("click", (event) => {
                event.preventDefault();

                const idUsuario = inputTextUser.value.trim();

                //Creo el bloque que irá en el formulario final
                const newForm = document.getElementById("newForm");
                const labelImputText = document.createElement("label");
                labelImputText.htmlFor = idUsuario;
                labelImputText.textContent = idUsuario;
                const inputText = document.createElement("input");
                inputText.type = "text";
                inputText.id = idUsuario;

                newForm.appendChild(inputText);

                //Limpio el formulario de selección
                divTemp.innerHTML = "";
                selectForm.value = "seleccionar";
            });
        }

        if (seleccionado === "pwrd") {
            //Creo los elementos para que el usuario introduzca el id del campo
            const pswrdUser = document.createElement("input");
            pswrdUser.type = "text";
            pswrdUser.id = "passwordUser";

            const labelPswrUser = document.createElement("label");
            labelPswrUser.htmlFor = "passwordUser";
            labelPswrUser.textContent = "intrudce el nombre (id) del campo contraseña:"

            const botonAceptarPswrd = document.createElement("button");
            botonAceptarPswrd.type = "button";
            botonAceptarPswrd.classList.add("botonAceptar");
            botonAceptarPswrd.textContent = "Aceptar";

            const divTemp = document.getElementById("divTemp");
            divTemp.append(labelPswrUser, pswrdUser, botonAceptarPswrd);

            botonAceptarPswrd.addEventListener("click", (event) => {
                event.preventDefault();

                const idPass = pswrdUser.value.trim();

                const pswrdForm = document.createElement("input");
                pswrdForm.type = "password";
                pswrdForm.id = idPass;

                const labelPswrFrom = document.createElement("label");
                labelPswrFrom.htmlFor = idPass;
                labelPswrFrom.textContent = idPass;

                const newForm = document.getElementById("newForm");

                newForm.appendChild(pswrdForm);

                //Limpio el formulario de selección
                divTemp.innerHTML = "";
                selectForm.value = "seleccionar";
            });
        }

        if (seleccionado === "textarea") {
            const textareaUser = document.createElement("input");
            textareaUser.type = "text";
            textareaUser.id = "textareaUser";

            const labelTextareaUser = document.createElement("label");
            labelTextareaUser.htmlFor = "textareaUser";
            labelTextareaUser.textContent = "intrudce el nombre (id) del área de texto:"

            const botonAceptarTextarea = document.createElement("button");
            botonAceptarTextarea.type = "button";
            botonAceptarTextarea.textContent = "Aceptar";
            botonAceptarTextarea.classList.add = "botonAceptar";

            const divTemp = document.getElementById("divTemp");
            divTemp.append(labelTextareaUser, textareaUser, botonAceptarTextarea);

            botonAceptarTextarea.addEventListener("click", (event) => {
                event.preventDefault();

                const textareaId = textareaUser.value.trim();

                const textareaForm = document.createElement("textarea");
                textareaForm.setAttribute("rows", "5");
                textareaForm.setAttribute("cols", "50");
                textareaForm.id = textareaId;

                const labelTextareaUser = document.createElement("label");
                labelTextareaUser.id = textareaId;
                labelTextareaUser.textContent = textareaId;

                const newForm = document.getElementById("newForm");
                newForm.appendChild(textareaForm);

                divTemp.innerHTML = "";
                selectForm.value = "seleccionar";
            });
        }

        if (seleccionado === "label") {
            //imput para el id
            const labelUser = document.createElement("input");
            labelUser.type = "text";
            labelUser.id = "labelUser";

            //imput para el texto
            const labelUserText = document.createElement("input");
            labelUserText.type = "text";
            labelUserText.id = "labelUser";

            //label para el id
            const labelLabelUser = document.createElement("label");
            labelLabelUser.htmlFor = "labelUser";
            labelLabelUser.textContent = "intrudce la referencia al campo (for) correspondiente:"

            //label para el texto
            const labelLabelUserText = document.createElement("label");
            labelLabelUserText.htmlFor = "labelUser";
            labelLabelUserText.textContent = "intrudce el texto de la label:"

            const botonAceptarLabel = document.createElement("button");
            botonAceptarLabel.type = "button";
            botonAceptarLabel.textContent = "Aceptar";
            botonAceptarLabel.classList.add = "botonAceptar";

            const divTemp = document.getElementById("divTemp");

            divTemp.append(labelLabelUser, labelUser, labelLabelUserText, labelUserText, botonAceptarLabel);

            botonAceptarLabel.addEventListener("click", (event) => {
                event.preventDefault();

                const forLabel = labelUser.value.trim();
                const textLabel = labelUserText.value.trim();

                const labelForm = document.createElement("label");
                labelForm.htmlFor = forLabel;
                labelForm.textContent = textLabel;

                const newForm = document.getElementById("newForm");
                newForm.appendChild(labelForm);

                divTemp.innerHTML = "";
                selectForm.value = "seleccionar";
            });
        }

        if (seleccionado === "img") {
            const UrlImgUser = document.createElement("input");
            UrlImgUser.type = "text";
            UrlImgUser.id = "urlInputImgUser"

            const labelUrlImgUser = document.createElement("label");
            labelUrlImgUser.htmlFor = "urlInputImgUser";
            labelUrlImgUser.textContent = "Introduce la URL de la imagen";

            const idImgUser = document.createElement("input");
            idImgUser.type = "text";
            idImgUser.id = "idImgUser";

            const labelIdImgUser = document.createElement("label");
            labelIdImgUser.htmlFor = "idImgUser";
            labelIdImgUser.textContent = "Introduce el nombre (id) de la imagen";

            const botonAceptarImg = document.createElement("button");
            botonAceptarImg.type = "button";
            botonAceptarImg.textContent = "Aceptar";
            botonAceptarImg.classList = "botonAceptar";

            const divTemp = document.getElementById("divTemp");

            divTemp.append(labelUrlImgUser, UrlImgUser, labelIdImgUser, idImgUser, botonAceptarImg);

            botonAceptarImg.addEventListener("click", (event) => {
                const newForm = document.getElementById("newForm");

                const src = UrlImgUser.value.trim();
                const id = idImgUser.value.trim();

                const imgForm = document.createElement("img");
                imgForm.src = src;
                imgForm.id = id;

                newForm.appendChild(imgForm);

                divTemp.innerHTML = "";
                selectForm.value = "seleccionar";
            });
        }
        if (seleccionado === "checkbox") {

            const idCheckboxUser = document.createElement("input");
            idCheckboxUser.type = "text";
            idCheckboxUser.id = "idCheckboxUser";

            const labelIdCheckboxUser = document.createElement("label");
            labelIdCheckboxUser.htmlFor = "idCheckboxUser";
            labelIdCheckboxUser.textContent = "Introduce el nombre (id) del checkbox:";

            const nameCheckboxUser = document.createElement("input");
            nameCheckboxUser.type = "text";
            nameCheckboxUser.id = "textoCheckboxUser";

            const labelTextoCheckboxUser = document.createElement("label");
            labelTextoCheckboxUser.htmlFor = "textoCheckboxUser";
            labelTextoCheckboxUser.textContent = "Introduce el texto del checkbox:";

            const botonAceptarCheckbox = document.createElement("button");
            botonAceptarCheckbox.type = "button";
            botonAceptarCheckbox.textContent = "Aceptar";
            botonAceptarCheckbox.classList = "botonAceptar";

            const divTemp = document.getElementById("divTemp");

            divTemp.append(
                labelIdCheckboxUser, idCheckboxUser,
                labelTextoCheckboxUser, nameCheckboxUser,
                botonAceptarCheckbox
            );

            botonAceptarCheckbox.addEventListener("click", (event) => {
                event.preventDefault();

                const newForm = document.getElementById("newForm");

                const id = idCheckboxUser.value.trim();
                const name = nameCheckboxUser.value.trim();

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = id;
                checkbox.name = name;

                newForm.append(checkbox);

                divTemp.innerHTML = "";
                selectForm.value = "seleccionar";
            });
        }

        if (seleccionado === "radio") {

            const idRadioUser = document.createElement("input");
            idRadioUser.type = "text";
            idRadioUser.id = "idRadioUser";

            const labelIdRadioUser = document.createElement("label");
            labelIdRadioUser.htmlFor = "idRadioUser";
            labelIdRadioUser.textContent = "Introduce el nombre (id) del radio:";

            const nameRadioUser = document.createElement("input");
            nameRadioUser.type = "text";
            nameRadioUser.id = "nameRadioUser";

            const labelNameRadioUser = document.createElement("label");
            labelNameRadioUser.htmlFor = "nameRadioUser";
            labelNameRadioUser.textContent = "Introduce el nombre del grupo (name):";

            const botonAceptarRadio = document.createElement("button");
            botonAceptarRadio.type = "button";
            botonAceptarRadio.textContent = "Aceptar";
            botonAceptarRadio.classList = "botonAceptar";

            const divTemp = document.getElementById("divTemp");

            divTemp.append(
                labelIdRadioUser, idRadioUser,
                labelNameRadioUser, nameRadioUser,
                botonAceptarRadio
            );

            botonAceptarRadio.addEventListener("click", (event) => {
                event.preventDefault();

                const newForm = document.getElementById("newForm");

                const id = idRadioUser.value.trim();
                const name = nameRadioUser.value.trim();

                const radio = document.createElement("input");
                radio.type = "radio";
                radio.id = id;
                radio.name = name;

                newForm.append(radio);

                divTemp.innerHTML = "";
                selectForm.value = "seleccionar";
            });
        }
        if (seleccionado === "boton") {

            const idBotonUser = document.createElement("input");
            idBotonUser.type = "text";
            idBotonUser.id = "idBotonUser";

            const labelIdBotonUser = document.createElement("label");
            labelIdBotonUser.htmlFor = "idBotonUser";
            labelIdBotonUser.textContent = "Introduce el nombre (id) del botón:";

            const textoBotonUser = document.createElement("input");
            textoBotonUser.type = "text";
            textoBotonUser.id = "textoBotonUser";

            const labelTextoBotonUser = document.createElement("label");
            labelTextoBotonUser.htmlFor = "textoBotonUser";
            labelTextoBotonUser.textContent = "Introduce el texto del botón:";

            const botonAceptarBoton = document.createElement("button");
            botonAceptarBoton.type = "button";
            botonAceptarBoton.textContent = "Aceptar";
            botonAceptarBoton.classList = "botonAceptar";

            const divTemp = document.getElementById("divTemp");

            divTemp.append(
                labelIdBotonUser, idBotonUser,
                labelTextoBotonUser, textoBotonUser,
                botonAceptarBoton
            );

            botonAceptarBoton.addEventListener("click", (event) => {
                event.preventDefault();

                const newForm = document.getElementById("newForm");

                const id = idBotonUser.value.trim();
                const texto = textoBotonUser.value.trim();

                const botonForm = document.createElement("button");
                botonForm.id = id;
                botonForm.type = "submit";
                botonForm.textContent = texto;

                newForm.append(botonForm);

                divTemp.innerHTML = "";
                selectForm.value = "seleccionar";
            });
        }





    });

}