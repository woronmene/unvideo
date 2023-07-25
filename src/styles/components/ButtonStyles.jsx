export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    longButton: {
      bg: "brandColorDark",
      color: "#ffffff",
      borderRadius: "30px",
      width: "100%",
      height: "57px",
      // px: '20px',
      // py: '8px',

      fontSize: "14px",
      _hover: {
        opacity: "0.9",
      },
    },
    shortButton: {
      bg: "brandColorDark",
      color: "#ffffff",
      borderRadius: "30px",
      px: { base: "70px", lg: "100px" },
      py: { base: "15px", lg: "20px" },

      _hover: {
        opacity: "0.9",
      },
    },
    orderButton: {
      borderRadius: "30px",
      px: { base: "35px", md: "30px", xl: "35px" },
      py: { base: "12px", md: "0px", xl: "12px" },

      _hover: {
        opacity: "0.7",
      },
    },
    orderButtonOutline: {
      border: "1px",
      borderRadius: "30px",
      px: { base: "35px", md: "30px", xl: "35px" },
      py: { base: "12px", md: "10px", xl: "12px" },

      _hover: {
        opacity: "0.7",
      },
    },
    sizeButton: {
      padding: "10px 30px",
      border: "1px",
      borderColor: "neutralLight",
      borderRadius: "68px",
    },
    quantityButton: {
      // padding: "10px 100px",
      w: { base: "40px", lg: "58px" },
      h: { base: "30px", lg: "40px" },
      border: "1px",
      borderColor: "neutralDark",
      borderRadius: "100px",
    },
    accent: {
      border: "none",
      bg: "none",
      color: "accentBlue",
      borderRadius: "20",
      fontSize: { base: "16", lg: "20" },
      px: "20px",
      py: "8px",
      // _hover: {
      //     bg: '#2B262B'
      // }
    },

    clear: {
      width: { base: "100px", md: "148px" },
      py: { base: "5px", md: "15px" },
      // height: { base: "20px", lg: "38px" },
      borderRadius: "20px",
    },
    spirit: {
      border: "none",
      bg: "none",
      color: "neutralDark",
      borderRadius: "32px",
      px: "20px",
      py: "10px",
      _hover: {
        bg: "brandColorLight",
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
