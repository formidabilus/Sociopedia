import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  // * a hack so that profile picture will persist after refresh, because src doesn't persist the image if I use template literals `${}`
  const imageBasePath = process.env.REACT_APP_BASE_URL + "/assets/";
  const profilePicture = "" + image;

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={imageBasePath + profilePicture}
        alt="Profile"
      />
    </Box>
  );
};

export default UserImage;
