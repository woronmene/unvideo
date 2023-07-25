export const HeadingStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    edHeading: {
      color: "neutralDark",
      fontSize: "32px",
      fontWeight: "590",
      fontFamily: "SF Pro",
      lineHeight: "38px",
    },
    sectionHeading: {
      color: "neutralDark",
      fontSize: { base: "18px", lg: "24px" },
      fontWeight: "400",
      fontFamily: "SF Pro",
    },
    sectionHeading: {
      color: "neutralDark",
      fontSize: { base: "18px", lg: "20px" },
      fontWeight: "400",
      fontFamily: "SF Pro",
    },
    orderHeading: {
      color: "neutralDark",
      fontSize: { base: "13px", md: "16px", lg: "20px" },
      fontWeight: "600",
      fontFamily: "SF Pro",
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
