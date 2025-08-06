import React, { useEffect, useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    sizes?: string;
    priority?: boolean;
    placeholder?: string;
    webp?: boolean;
    className?: string;
}

const Image: React.FC<ImageProps> = ({
    src,
    alt = '',
    width,
    height,
    sizes = '100vw',
    priority = false,
    placeholder = null,
    webp = true,
    className = '',
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    const [supportsWebp, setSupportsWebp] = useState(true);

    useEffect(() => {
        if (!webp) return;

        const img = new window.Image();
        img.src =
            'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEALwCdASoBAAEALwCdASoBAAEALwCdASoBAAEALwCdASoBAAEALwCdASoBAAEALwCdASoBAAEALwCdASoBAAEALwCdASoBAAEALwCdASoBAAEALwCdASoBAAEALw==';
        img.onload = () => setSupportsWebp(true);
        img.onerror = () => setSupportsWebp(false);
    }, [webp]);

    const optimizedSrc = supportsWebp && webp && !src.endsWith('.svg') ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp') : src;

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : 'auto',
            }}
        >
            {!loaded && placeholder && (
                <img src={placeholder} alt="blur placeholder" className="absolute inset-0 h-full w-full scale-110 object-cover blur-lg" />
            )}

            <img
                src={optimizedSrc}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                sizes={sizes}
                onLoad={() => setLoaded(true)}
                className={`transition-opacity duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} object-cover`}
                {...props}
            />
        </div>
    );
};

export default Image;
