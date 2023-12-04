import { Box, Text } from "grommet";
import { CircleAlert } from "grommet-icons";
import PropTypes from "prop-types";

export const FormOverallAlert = ({ message }) => {
  return (
    <Box
      background="rgba(252, 97, 97, 0.24)"
      pad="small"
      round="4px"
      // Relies on the form child to provide a bottom margin that is between itself
      // and the buttons or this error. This setting will then provide
      // a margin between the error message and the buttons.
      margin={{ vertical: "medium" }}
      gap="xsmall"
      direction="row"
      align="center"
      id="form-global-error"
    >
      <CircleAlert size="small" />
      <Text size="xsmall" data-testId="form-global-error-message">
        {message}
      </Text>
    </Box>
  );
};
FormOverallAlert.propTypes = {
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};
