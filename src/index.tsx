import React, { useRef, useEffect } from 'react';

export function ResponsiveText(props: React.SVGTextElementAttributes<SVGTextElement>) {
    const svgRef = useRef<SVGSVGElement>(null);
    const textRef = useRef<SVGTextElement>(null);

    useEffect(() => {
        if (textRef.current === null || svgRef.current === null) return;

        const width = textRef.current.clientWidth * 2;

        svgRef.current.setAttribute('viewBox', `0 0 ${width} 20`);
    }, [textRef]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" ref={svgRef}>
            <text x="0" y="15" ref={textRef} {...props} />
        </svg>
    );
}
