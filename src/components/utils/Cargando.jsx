import logo from '../../assets/images/logo.png';

export const Cargando = () => {
    return (
        <div className="cargando-container">
            <img src={logo} alt="Logotipo de Flip Inmobiliaria" />

            <p className="alliance-text typing">Cargando...</p>
        </div>
    );
};
