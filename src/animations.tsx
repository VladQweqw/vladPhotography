export const fadeTopBottom = {
    hidden: {
        opacity: 0,
        translateY: "-50%",
        
    },
    visible: {
        translateY: "0%",
        opacity: 1,
        transition: { 
            ease: "easeInOut",
            duration: .75,
            delay: 1
        }
    }
}

export const gearFade = {
    hidden: {
        opacity: 0,
        translateY: "-50%",
        
    },
    visible: {
        translateY: "0%",
        opacity: 1,
        transition: { 
            ease: "easeInOut",
            duration: .75,
    
        }
    }
}

export const heroImages = {
    hidden: {
        scale: .8,
        
    },
    visible: {
        scale: 1,
        transition: { 
            ease: "easeInOut",
            duration: 1,
            delay: .25
        }
    }
}

export const parent_photo = {
    hidden: { 
    },
    visible: {
        transition: { 
            ease: "easeInOut",
            staggerChildren: 0.1
            
        }
    }
}

export const child_photo = {
    hidden: {
        scale: .8,
        opacity: 0,
        
    },
    visible: {
        scale: 1,
        opacity: 1,

    
    }
}