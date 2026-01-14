export const navLinks = [
    {
        id: 'inicio',
        to: '/',
        label: 'Inicio',
        useScrollToTop: true,
    },
    {
        id: 'servicios',
        label: 'Servicios',
        useScrollToTop: true,
        children: [
            { id: 'comprar', to: '/comprar', label: 'Comprar' },
            { id: 'vender', to: '/vender', label: 'Vender' },
            { id: 'remodelar', to: '/remodelar', label: 'Remodelar' },
            { id: 'rentar', to: '/rentar', label: 'Rentar' },
            { id: 'infonavit', to: '/infonavit', label: 'Infonavit' },
        ],
    },
    {
        id: 'nosotros',
        to: '/nosotros',
        label: 'Nosotros',
    },
    {
        id: 'contacto',
        to: '/contacto',
        label: 'Contáctanos',
    },
];
