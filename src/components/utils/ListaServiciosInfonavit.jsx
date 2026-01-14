import img1 from '../../assets/images/servicios/infonavit/img-section-is-2.png';
import img2 from '../../assets/images/servicios/infonavit/img-section-is-3.png';

export const ListaServiciosInfonavit = [
    {
        id: 1,
        img: img1,
        alt: 'Personas felices por los resultados de Infonavit Flip Inmobiliaria',
        lista: [
            { id: '01', texto: 'Personas que ya no tienen un crédito vigente con Infonavit.' },
            { id: '02', texto: 'Trabajadores que se jubilaron o cesaron sus aportaciones.' },
            { id: '03', texto: 'Aquellos que nunca solicitaron un crédito de vivienda.' },
        ],
    },
    {
        id: 2,
        img: img2,
        alt: 'Agente de Flip Inmobiliaria revisando tus documentos',
        titulo: 'Documentos necesarios:',
        lista: [
            { id: '04', texto: 'INE vigente' },
            { id: '05', texto: 'Estado de cuenta bancario' },
            { id: '06', texto: 'Número de Seguridad Social (NSS)' },
            { id: '07', texto: 'CURP Y RFC' },
        ],
    },
];
