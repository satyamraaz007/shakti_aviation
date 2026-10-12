import { useState } from 'react';

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className?: string;
    loading?: 'lazy' | 'eager';
    width?: number;
    height?: number;
}

export default function ImageWithFallback({
    src,
    alt,
    className = '',
    loading = 'lazy',
}: ImageWithFallbackProps) {
    const [error, setError] = useState(false);

    return (
        <img
            src={error ? 'https://images.pexels.com/photos/19996007/pexels-photo-19996007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' : src}
            alt={alt}
            className={className}
            loading={loading}
            onError={() => setError(true)}
        />
    );
}
