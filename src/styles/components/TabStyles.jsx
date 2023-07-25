import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility to set light and dark mode props

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);
// define a custom variant
const colorfulVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // extract colorScheme from component props

  return {
    tab: {
      //   border: "2px solid",
      //   borderColor: "transparent",
      // use colorScheme to change background color with dark and light mode options
      bg: mode(`${c}.300`, `${c}.600`)(props),
      //   borderTopRadius: "lg",
      borderRadius: "30px",

      borderBottom: "none",
      _selected: {
        bg: "#EEEBF5",
        // bg: mode("#fff", "gray.800")(props),
        color: mode(`${c}.500`, `${c}.300`)(props),
        borderColor: "inherit",
        borderBottom: "none",
        // mb: "-2px",
      },
    },
    tablist: {
      //   borderBottom: "2x solid",
      //   borderColor: "inherit",
    },
    tabpanel: {
      padding: "0",
      //   border: "2px solid",
      //   borderColor: "inherit",
      //   borderBottomRadius: "lg",
      //   borderTopRightRadius: "lg",
    },
  };
});

const variants = {
  colorful: colorfulVariant,
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ variants });

// now we can use the `colorful` variant with a different color Scheme
