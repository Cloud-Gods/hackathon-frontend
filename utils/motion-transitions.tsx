export const transitionVariantsPage = {
    initial: {
        x: "100%",
        width: "100%",
    },

    animate: {
        x: '0%',
        width: '0%',
    },

    exit: {
        x: ['0%', '100%'],
        with: ['0%', '100%'],
    },
};

export const fadeIn = (direction: 'right' | 'bottom') => ({
    hidden: {
        x: direction === 'right' ? 100 : 0,
        y: direction === 'bottom' ? 100 : 0,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring' as const,
            duration: 0.8,
            delay: 0.2,
        },
    },
});