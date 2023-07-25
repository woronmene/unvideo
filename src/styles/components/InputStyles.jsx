export const InputStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    new: {
      color: "red",
      borderBottom: "2px",
      borderBottomColor: "red",
    },
    spirit: {
      border: "none",
      bg: "none",
      color: "#F9F9F9",
      borderRadius: "20",
      px: "20px",
      py: "8px",
      _hover: {
        bg: "#2B262B",
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
