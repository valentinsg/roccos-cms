const product = {
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'sucursal',
      title: 'Sucursal',
      type: 'string',
      options: {
        list: [
          { title: "Rocco's", value: 'roccos' },
          { title: "Rocco's 2.0", value: 'roccos-2' },
        ],
      },
    },
    {
      name: 'isAvailable',
      title: 'Disponible',
      type: 'boolean',
      initialValue: true,
      description: 'Indica si el producto está disponible para la venta'
    },
    {
      name: 'isPromo',
      title: '¿Es promoción?',
      type: 'boolean',
    },
    {
      name: 'promoDetails',
      title: 'Detalles de la promo',
      type: 'string',
    },
    {
      name: 'originalPrice',
      title: 'Precio original',
      type: 'number',
    },
    {
      name: 'star',
      title: 'Producto estrella',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'dailySpecial',
      title: 'Daily Special',
      type: 'boolean',
      hidden: ({ parent }: { parent: any }) => parent?.sucursal !== 'roccos',
      initialValue: false,
    }
  ],
}

export default product