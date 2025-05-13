const category = {
  name: "category",
  title: "Categoría",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "_id",
      title: "ID",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Orden",
      type: "number",
    },
    {
      name: "sucursal",
      title: "Sucursal",
      type: "string",
      options: {
        list: [
          { title: "Rocco's", value: "roccos" },
          { title: "Rocco's 2.0", value: "roccos-2" },
        ],
      },
    },
  ],
}

export default category
