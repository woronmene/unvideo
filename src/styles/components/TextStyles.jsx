export const TextStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    edHeading: {
      color: "neutralDark",
      fontSize: "32px",
      fontWeight: "400",

      _hover: {
        opacity: "0.9",
      },
    },
    detailHeader: {
      color: "neutralMedium",
      fontSize: { base: "14px", lg: "16px" },
    },
    // sectionHeading: {
    //   color: "neutralDark",
    //   fontSize: "32px",
    // },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
