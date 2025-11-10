import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors:{
            bg:{
                disabled: string;
                neutral: {
                    section: {
                        calmest: string;
                        calm: string;
                    };
                    global: {
                        calm: string;
                    };
                };
                primary: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                gray: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                yellow: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                blue: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                orange: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                green: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                critical: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
            };
            border:{
                disabled: string;
                primary: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                gray: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                yellow: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                blue: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                orange: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                green: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                critical: {
                    calm: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
            };
            text:{
                main: string;
                mainOnLight: string;
                mainOnDark: string;
                secondary: string;
                tertiary: string;
                disabled: string;
                inverted: string;
                primary: {
                    calm: {
                        enabled: string;
                    };
                    loud: {
                        enabled: string;
                    };
                };
                gray: {
                    calm: {
                        enabled: string;
                    };
                    loud: {
                        enabled: string;
                    };
                };
                yellow: {
                    calm: {
                        enabled: string;
                    };
                    loud: {
                        enabled: string;
                    };
                };
                blue: {
                    calm: {
                        enabled: string;
                    };
                    loud: {
                        enabled: string;
                    };
                };
                orange: {
                    calm: {
                        enabled: string;
                    };
                    loud: {
                        enabled: string;
                    };
                };
                green: {
                    calm: {
                        enabled: string;
                    };
                    loud: {
                        enabled: string;
                    };
                };
                critical: {
                    calm: {
                        enabled: string;
                    };
                    loud: {
                        enabled: string;
                    };
                };
            };
            link: {
                primary:{
                    enabled: string;
                    hover: string;
                    active: string;
                };
                secondary:{
                    enabled: string;
                    hover: string;
                    active: string;
                };
                navigation:{
                    enabled: string;
                    hover: string;
                    active: string;
                };
            };
        };

        typography: {
            fontFamily: {
                heading: string;
                text: string;
                component: string;
                monospace: string;
            };
            fontSize: {
                heading: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                };
                text: {
                    base: string;
                    small: string;
                    extraSmall: string;
                };
                component: {
                    base: string;
                    small: string;
                    extraSmall: string;
                };
            };
            lineHeight: {
                heading: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                };
                text: {
                    base: string;
                    small: string;
                    extraSmall: string;
                };
                component: {
                    base: string;
                    small: string;
                    extraSmall: string;
                };
            };
            fontWeight: {
                regular: string;
                medium: string;
                semiBold: string;
                bold: string;
            };
        };

        spasing: {
            inner: {
                closest: string;
                close: string;
                related: string;
                grouped: string;
                subSection: string;
                section: string;
            };
            outer: {
                related: string;
                grouped: string;
                subSection: string;
                section: string;
            };
            padding: {
                compact: string;
                default: string;
                middle: string;
                relaxed: string;
                large: string;
            };
            height: {
                xxxxSmall: string;
                xxxSmall: string;
                xxSmal: string;
                xSmall: string;
                small: string;
                base: string;
                large: string;
                xLarge: string;
                xxLarge: string;
            };
        };

        borderRadius: {
            micro: string;
            rounded: string;
        }
    }
}