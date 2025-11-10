import { DefaultTheme } from "styled-components";
import { colors, typography, spacers } from "./tokens"

export const lightTheme: DefaultTheme = {
colors:{
            bg:{
                disabled: colors.gray[100],
                neutral: {
                    section: {
                        calmest: colors.base.white,
                        calm: colors.gray[50],
                    },
                    global: {
                        calm: colors.gray[50],
                    },
                },
                primary: {
                    calm: {
                        enabled: colors.teal[50],
                        hover: colors.teal[100],
                        active: colors.teal[200],
                    },
                    loud: {
                        enabled: colors.teal[400],
                        hover: colors.teal[300],
                        active: colors.teal[200],
                    },
                },
                gray: {
                    calm: {
                        enabled: colors.gray[50],
                        hover: colors.gray[100],
                        active: colors.gray[200],
                    },
                    loud: {
                        enabled: colors.gray[400],
                        hover: colors.gray[300],
                        active: colors.gray[200],
                    },
                },
                yellow: {
                    calm: {
                        enabled: colors.yellow[50],
                        hover: colors.yellow[100],
                        active: colors.yellow[200],
                    },
                    loud: {
                        enabled: colors.yellow[400],
                        hover: colors.yellow[300],
                        active: colors.yellow[200],
                    },
                },
                blue: {
                    calm: {
                        enabled: colors.blue[50],
                        hover: colors.blue[100],
                        active: colors.blue[200],
                    },
                    loud: {
                        enabled: colors.blue[400],
                        hover: colors.blue[300],
                        active: colors.blue[200],
                    },
                },
                orange: {
                    calm: {
                        enabled: colors.orange[50],
                        hover: colors.orange[100],
                        active: colors.orange[200],
                    },
                    loud: {
                        enabled: colors.orange[400],
                        hover: colors.orange[300],
                        active: colors.orange[200],
                    },
                },
                green: {
                    calm: {
                        enabled: colors.green[50],
                        hover: colors.green[100],
                        active: colors.green[200],
                    },
                    loud: {
                        enabled: colors.green[400],
                        hover: colors.green[300],
                        active: colors.green[200],
                    },
                },
                critical: {
                    calm: {
                        enabled: colors.red[50],
                        hover: colors.red[100],
                        active: colors.red[200],
                    },
                    loud: {
                        enabled: colors.red[400],
                        hover: colors.red[300],
                        active: colors.red[200],
                    },
                },
            },
            border:{
                disabled: colors.gray[100],
                primary: {
                    calm: {
                        enabled: colors.teal[200],
                        hover: colors.teal[100],
                        active: colors.teal[50],
                    },
                    loud: {
                        enabled: colors.teal[500],
                        hover: colors.gray[800],
                        active: colors.gray[700],
                    },
                },
                gray: {
                    calm: {
                        enabled: colors.gray[200],
                        hover: colors.gray[100],
                        active: colors.gray[50],
                    },
                    loud: {
                        enabled: colors.gray[400],
                        hover: colors.gray[300],
                        active: colors.gray[200],
                    },
                },
                yellow: {
                    calm: {
                        enabled: colors.yellow[200],
                        hover: colors.yellow[100],
                        active: colors.yellow[50],
                    },
                    loud: {
                        enabled: colors.yellow[400],
                        hover: colors.yellow[300],
                        active: colors.yellow[200],
                    },
                },
                blue: {
                    calm: {
                        enabled: colors.blue[200],
                        hover: colors.blue[100],
                        active: colors.blue[50],
                    },
                    loud: {
                        enabled: colors.blue[400],
                        hover: colors.blue[300],
                        active: colors.blue[200],
                    },
                },
                orange: {
                    calm: {
                        enabled: colors.orange[200],
                        hover: colors.orange[100],
                        active: colors.orange[50],
                    },
                    loud: {
                        enabled: colors.orange[400],
                        hover: colors.orange[300],
                        active: colors.orange[200],
                    },
                },
                green: {
                    calm: {
                        enabled: colors.green[200],
                        hover: colors.green[100],
                        active: colors.green[50],
                    },
                    loud: {
                        enabled: colors.green[400],
                        hover: colors.green[300],
                        active: colors.green[200],
                    },
                },
                critical: {
                    calm: {
                        enabled: colors.red[200],
                        hover: colors.red[100],
                        active: colors.red[50],
                    },
                    loud: {
                        enabled: colors.red[400],
                        hover: colors.red[300],
                        active: colors.red[200],
                    },
                },
            },
            text:{
                main: colors.gray[800],
                mainOnLight: colors.gray[800],
                mainOnDark: colors.gray[50],
                secondary: colors.gray[500],
                tertiary: colors.gray[400],
                disabled: colors.gray[300],
                inverted: colors.base.white,
                primary: {
                    calm: {
                        enabled: colors.teal[50],
                    },
                    loud: {
                        enabled: colors.teal[400],
                    },
                },
                gray: {
                    calm: {
                        enabled: colors.gray[50],
                    },
                    loud: {
                        enabled: colors.gray[400],
                    },
                },
                yellow: {
                    calm: {
                        enabled: colors.yellow[50],
                    },
                    loud: {
                        enabled: colors.yellow[400],
                    },
                },
                blue: {
                    calm: {
                        enabled: colors.blue[50],
                    },
                    loud: {
                        enabled: colors.blue[400],
                    },
                },
                orange: {
                    calm: {
                        enabled: colors.orange[50],
                    },
                    loud: {
                        enabled: colors.orange[400],
                    },
                },
                green: {
                    calm: {
                        enabled: colors.green[50],
                    },
                    loud: {
                        enabled: colors.green[400],
                    },
                },
                critical: {
                    calm: {
                        enabled: colors.red[50],
                    },
                    loud: {
                        enabled: colors.red[400],
                    },
                },
            },
            link: {
                primary:{
                    enabled: colors.teal[500],
                    hover: colors.gray[800],
                    active: colors.gray[700],
                },
                secondary:{
                    enabled: colors.gray[800],
                    hover: colors.teal[500],
                    active: colors.teal[600],
                },
                navigation:{
                    enabled: colors.gray[500],
                    hover: colors.teal[500],
                    active: colors.teal[600],
                },
            },
        },

        typography: {
            fontFamily: {
                heading: `"Open Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
                text: `"Open Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
                component: `"Open Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
                monospace: `'Noto Sans Mono', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
            },
            fontSize: {
                heading: {
                    h1: typography.fontSize.h1,
                    h2: typography.fontSize.h2,
                    h3: typography.fontSize.h3,
                    h4: typography.fontSize.h4,
                    h5: typography.fontSize.h5,
                    h6: typography.fontSize.h6,
                },
                text: {
                    base: typography.fontSize.base,
                    small: typography.fontSize.small,
                    extraSmall: typography.fontSize.extraSmall,
                },
                component: {
                    base: typography.fontSize.base,
                    small: typography.fontSize.small,
                    extraSmall: typography.fontSize.extraSmall,
                },
            },
            lineHeight: {
                heading: {
                    h1: typography.lineHeight.h1,
                    h2: typography.lineHeight.h2,
                    h3: typography.lineHeight.h3,
                    h4: typography.lineHeight.h4,
                    h5: typography.lineHeight.h5,
                    h6: typography.lineHeight.h6,
                },
                text: {
                    base: typography.lineHeight.base,
                    small: typography.lineHeight.small,
                    extraSmall: typography.lineHeight.extraSmall,
                },
                component: {
                    base: typography.lineHeight.base,
                    small: typography.lineHeight.small,
                    extraSmall: typography.lineHeight.extraSmall,
                },
            },
            fontWeight: {
                regular: typography.fontWeight.regular,
                medium: typography.fontWeight.medium,
                semiBold: typography.fontWeight.semiBold,
                bold: typography.fontWeight.bold,
            },
        },

        spasing: {
            inner: {
                closest: spacers[2],
                close: spacers[4],
                related: spacers[8],
                grouped: spacers[16],
                subSection: spacers[24],
                section: spacers[48],
            },
            outer: {
                related: spacers[8],
                grouped: spacers[16],
                subSection: spacers[24],
                section: spacers[48],
            },
            padding: {
                compact: spacers[4],
                default: spacers[8],
                middle: spacers[16],
                relaxed: spacers[20],
                large: spacers[28],
            },
            height: {
                xxxxSmall: spacers[4],
                xxxSmall: spacers[8],
                xxSmal: spacers[16],
                xSmall: spacers[24],
                small: spacers[32],
                base: spacers[40],
                large: spacers[48],
                xLarge: spacers[56],
                xxLarge: spacers[64],
            },
        },

        borderRadius: {
            micro: spacers[2],
            rounded: spacers[9999],
        } 
}

export const darkThem: DefaultTheme = {
...lightTheme,
        colors:{
            bg:{
                disabled: colors.gray[800],
                neutral: {
                    section: {
                        calmest: colors.gray[900],
                        calm: colors.gray[800],
                    },
                    global: {
                        calm: colors.gray[800],
                    },
                },
                primary: {
                    calm: {
                        enabled: colors.teal[800],
                        hover: colors.teal[700],
                        active: colors.teal[600],
                    },
                    loud: {
                        enabled: colors.teal[300],
                        hover: colors.teal[400],
                        active: colors.teal[500],
                    },
                },
                gray: {
                    calm: {
                        enabled: colors.gray[800],
                        hover: colors.gray[700],
                        active: colors.gray[600],
                    },
                    loud: {
                        enabled: colors.gray[300],
                        hover: colors.gray[400],
                        active: colors.gray[500],
                    },
                },
                yellow: {
                    calm: {
                        enabled: colors.yellow[800],
                        hover: colors.yellow[700],
                        active: colors.yellow[600],
                    },
                    loud: {
                        enabled: colors.yellow[300],
                        hover: colors.yellow[400],
                        active: colors.yellow[500],
                    },
                },
                blue: {
                    calm: {
                        enabled: colors.blue[800],
                        hover: colors.blue[700],
                        active: colors.blue[600],
                    },
                    loud: {
                        enabled: colors.blue[300],
                        hover: colors.blue[400],
                        active: colors.blue[500],
                    },
                },
                orange: {
                    calm: {
                        enabled: colors.orange[800],
                        hover: colors.orange[700],
                        active: colors.orange[600],
                    },
                    loud: {
                        enabled: colors.orange[300],
                        hover: colors.orange[400],
                        active: colors.orange[500],
                    },
                },
                green: {
                    calm: {
                        enabled: colors.green[800],
                        hover: colors.green[700],
                        active: colors.green[600],
                    },
                    loud: {
                        enabled: colors.green[300],
                        hover: colors.green[400],
                        active: colors.green[500],
                    },
                },
                critical: {
                    calm: {
                        enabled: colors.red[800],
                        hover: colors.red[700],
                        active: colors.red[600],
                    },
                    loud: {
                        enabled: colors.red[300],
                        hover: colors.red[400],
                        active: colors.red[500],
                    },
                },
            },
            border:{
                disabled: colors.gray[800],
                primary: {
                    calm: {
                        enabled: colors.teal[700],
                        hover: colors.teal[800],
                        active: colors.teal[900],
                    },
                    loud: {
                        enabled: colors.teal[400],
                        hover: colors.gray[50],
                        active: colors.gray[100],
                    },
                },
                gray: {
                    calm: {
                        enabled: colors.gray[700],
                        hover: colors.gray[800],
                        active: colors.gray[900],
                    },
                    loud: {
                        enabled: colors.gray[300],
                        hover: colors.gray[400],
                        active: colors.gray[500],
                    },
                },
                yellow: {
                    calm: {
                        enabled: colors.yellow[700],
                        hover: colors.yellow[800],
                        active: colors.yellow[900],
                    },
                    loud: {
                        enabled: colors.yellow[300],
                        hover: colors.yellow[400],
                        active: colors.yellow[500],
                    },
                },
                blue: {
                    calm: {
                        enabled: colors.blue[700],
                        hover: colors.blue[800],
                        active: colors.blue[900],
                    },
                    loud: {
                        enabled: colors.blue[300],
                        hover: colors.blue[400],
                        active: colors.blue[500],
                    },
                },
                orange: {
                    calm: {
                        enabled: colors.orange[700],
                        hover: colors.orange[800],
                        active: colors.orange[900],
                    },
                    loud: {
                        enabled: colors.orange[300],
                        hover: colors.orange[400],
                        active: colors.orange[500],
                    },
                },
                green: {
                    calm: {
                        enabled: colors.green[700],
                        hover: colors.green[800],
                        active: colors.green[900],
                    },
                    loud: {
                        enabled: colors.green[300],
                        hover: colors.green[400],
                        active: colors.green[500],
                    },
                },
                critical: {
                    calm: {
                        enabled: colors.red[700],
                        hover: colors.red[800],
                        active: colors.red[900],
                    },
                    loud: {
                        enabled: colors.red[300],
                        hover: colors.red[400],
                        active: colors.red[500],
                    },
                },
            },
            text:{
                main: colors.gray[50],
                mainOnLight: colors.gray[800],
                mainOnDark: colors.gray[50],
                secondary: colors.gray[200],
                tertiary: colors.gray[300],
                disabled: colors.gray[400],
                inverted: colors.gray[800],
                primary: {
                    calm: {
                        enabled: colors.teal[800],
                    },
                    loud: {
                        enabled: colors.teal[300],
                    },
                },
                gray: {
                    calm: {
                        enabled: colors.gray[800],
                    },
                    loud: {
                        enabled: colors.gray[300],
                    },
                },
                yellow: {
                    calm: {
                        enabled: colors.yellow[800],
                    },
                    loud: {
                        enabled: colors.yellow[300],
                    },
                },
                blue: {
                    calm: {
                        enabled: colors.blue[800],
                    },
                    loud: {
                        enabled: colors.blue[300],
                    },
                },
                orange: {
                    calm: {
                        enabled: colors.orange[800],
                    },
                    loud: {
                        enabled: colors.orange[300],
                    },
                },
                green: {
                    calm: {
                        enabled: colors.green[800],
                    },
                    loud: {
                        enabled: colors.green[300],
                    },
                },
                critical: {
                    calm: {
                        enabled: colors.red[800],
                    },
                    loud: {
                        enabled: colors.red[300],
                    },
                },
            },
            link: {
                primary:{
                    enabled: colors.teal[400],
                    hover: colors.gray[50],
                    active: colors.gray[100],
                },
                secondary:{
                    enabled: colors.gray[50],
                    hover: colors.teal[400],
                    active: colors.teal[500],
                },
                navigation:{
                    enabled: colors.gray[200],
                    hover: colors.teal[400],
                    active: colors.teal[500],
                },
            },
        },

    
}