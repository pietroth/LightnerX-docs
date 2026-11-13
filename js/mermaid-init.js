document.addEventListener('DOMContentLoaded', async () => {
    const blocks = document.querySelectorAll('pre code.language-mermaid');
    if (!blocks.length) return;
    try {
        const { default: mermaid } = await import('https://cdn.jsdelivr.net/npm/mermaid@11.12.1/dist/mermaid.esm.min.mjs');
        mermaid.initialize({ startOnLoad: false });
        for (const block of blocks) {
            const diagram = document.createElement('div');
            diagram.className = 'mermaid';
            diagram.textContent = block.textContent;
            block.parentElement.replaceWith(diagram);
        }
        await mermaid.run({ querySelector: '.mermaid' });
    } catch (error) {
        console.error('Unable to render the INER diagram.', error);
    }
});
