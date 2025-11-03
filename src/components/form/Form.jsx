import styles from '../../styles/modules/form.module.css';

import { useForm } from '../../hooks/UseForm';

import { Spinner } from '../../assets/icons/Spinner';

import PhoneInput from 'react-phone-input-2';
import { CustomSelect } from './CustomSelect';

import { estados } from './estadosMexicos';

export const Form = () => {
    const estadosOptions = estados.map((e) => ({ value: e, label: e }));

    const { formData, errors, loading, handleChange, updateField, handleSubmit, showAlert } = useForm(
        {
            nombre: '',
            email: '',
            telefono: '',
            estado: '',
        },
        (success, data) => {
            if (success) {
                showAlert('Excelente', 'Datos enviados correctamente.<br>Pronto nos pondremos en contacto contigo.', 'success', '#7f8ac7');
            } else {
                showAlert('Ups', 'Hubo un error al enviar los datos.', 'error', '#ac3150');
            }
        }
    );

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.inputsContainer}>
                {/* NOMBRE Y APELLIDO */}
                <div className={styles.campoPrecalificarForm}>
                    <label htmlFor="nombre" className={`alliance-text ${errors.nombre ? styles.labelError : ''}`} aria-label="Nombre del usuario">
                        Nombre y apellido
                    </label>
                    <input
                        type="text"
                        className={styles.formControl}
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        aria-invalid={!!errors.nombre}
                    />
                </div>

                {/* TELEFONO */}
                <div className={styles.campoPrecalificarForm}>
                    <label htmlFor="telefono" className={`alliance-text ${errors.telefono ? styles.labelError : ''}`}>
                        Teléfono
                    </label>
                    <PhoneInput
                        country="mx"
                        value={formData.telefono || ''}
                        onChange={(phone) => {
                            const formatted = `+${phone}`;
                            handleChange({ target: { name: 'telefono', value: formatted } });
                        }}
                        inputClass={styles.formControl}
                        inputProps={{
                            name: 'telefono',
                            required: true,
                            autoComplete: 'tel',
                            id: 'telefono',
                            'aria-invalid': !!errors.telefono,
                        }}
                        enableSearch
                        preferredCountries={['mx', 'us']}
                        placeholder=""
                        disablePlaceholder={true}
                    />
                </div>

                {/* EMAIL */}
                <div className={styles.campoPrecalificarForm}>
                    <label htmlFor="email" className={`alliance-text ${errors.email ? styles.labelError : ''}`} aria-label="email del usuario">
                        Correo electronico
                    </label>
                    <input
                        type="email"
                        className={styles.formControl}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        aria-invalid={!!errors.email}
                    />
                </div>

                {/* ESTADO */}
                <CustomSelect
                    label="Estado"
                    name="estado"
                    options={estadosOptions}
                    value={formData.estado}
                    onChange={updateField}
                    error={errors.estado}
                    placeholder="Selecciona una opción"
                />
            </div>

            {/* BOTON ENVIAR */}
            <div className={styles.contentEnvio}>
                <button type="submit" className="boton-2 alliance-text" disabled={loading}>
                    <span style={{ paddingBottom: '5px', visibility: loading ? 'hidden' : 'visible' }}>Enviar</span>
                    {loading && (
                        <div>
                            <Spinner size={24} color="white" strokeWidth={3} speed={1} />
                        </div>
                    )}
                </button>
            </div>

            {Object.keys(errors).length > 0 && (
                <div className={styles.mensajeErrorGeneral}>
                    <p className="alliance-text">Por favor completa el formulario</p>
                </div>
            )}
        </form>
    );
};
