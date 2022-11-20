import React from "react"
import { useFormik } from "formik"
import * as yup from "yup"
import { Box, Button, TextField, Typography } from "@mui/material"

//  Colocamos el nombre que dimos en initialValues y TextField, ej. (name: yup)
// le indicamos si deseamos que sea required y mensajes de error
// en el caso de email podemos condicionar la cantidad de caracteres minimos para 
const validarDatos = yup.object({
  name: yup
    .string('Introduce tu nombre')
    .required('Su nombre es requerido'),
  email: yup
    .string("Introduce tu correo electrónico")
    .email("Introduzca un correo electrónico válido")
    .required("Correo electrónico es requerido"),
  password: yup
    .string("Introduce tu contraseña")
    .min(8, "La contraseña debe tener una longitud mínima de 8 caracteres")
    .required("Contraseña es requerida"),
});

const NombreDeLaFuncion = () => {
  const formik = useFormik({
    // initialValues: Definimos los campos de nuestros formularios, con datos vacíos.
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    // validationSchema: Las reglas de validacion. Y que se mostraran dentro de los TextField
    validationSchema: validarDatos,
    // onSubmit: Las acciones que sucederán una vez que el usuario envíe el formulario
        // Values: Recoge los datos que se rellena los inputs y enviamos
        // resetForm(): Después de enviar el formulario se resetean los campos.
    onSubmit: (values, {resetForm}) => {
      alert(JSON.stringify(values, null, 2));
      resetForm()
    },
  });

  return (
    <div>
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" m={5}>
        Formulario con Formik y validación con YUP
        </Typography>

        <form onSubmit={formik.handleSubmit} sx={{ mt: 3, mb: 2 }}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Nombre y Apellido"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            id="email"
            name="email"
            label="Correo electrónico"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            sx={{ mt: 2, mb: 2 }}
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 3, mb: 2 }}>
            Enviar
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default NombreDeLaFuncion;
