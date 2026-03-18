import PropTypes from 'prop-types';

export const ResponsiveImage = ({ mobile, desktop, alt, breakpoint = 1200, className = '', loading = 'lazy', decoding = 'async' }) => {
    return (
        <picture>
            {desktop && <source media={`(min-width: ${breakpoint}px)`} srcSet={desktop} />}

            <img src={mobile} alt={alt} className={className} loading={loading} decoding={decoding} />
        </picture>
    );
};

ResponsiveImage.propTypes = {
    mobile: PropTypes.string.isRequired,
    desktop: PropTypes.string,
    alt: PropTypes.string.isRequired,
    breakpoint: PropTypes.number,
    className: PropTypes.string,
    loading: PropTypes.oneOf(['lazy', 'eager']),
    decoding: PropTypes.oneOf(['async', 'sync', 'auto']),
};
