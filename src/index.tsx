import React, { useRef, useEffect } from 'react';

export function ResponsiveText(props: React.SVGTextElementAttributes<SVGTextElement>) {
    const svgRef = useRef<SVGSVGElement>(null);
    const textRef = useRef<SVGTextElement>(null);

    useEffect(() => {
        if (textRef.current === null || svgRef.current === null) return;

        const width = textRef.current.clientWidth;
        const height = textRef.current.clientHeight;

        const containerHeight = 20;
        const containerWidth = containerHeight * width / height;

        svgRef.current.setAttribute('viewBox', `0 0 ${containerWidth} ${containerHeight}`);
    }, [textRef]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" ref={svgRef}>
            <text x="0" y="15" ref={textRef} {...props} />
        </svg>
    );
}
