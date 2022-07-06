import {styled} from "@mui/material/styles";
import { Button } from "@mui/material";


const MyButton =styled(Button)(()=> ({

}));

const RoundedButton =styled(Button)((MyButton)=> ({
    borderRadius: "20px",
}));

export {MyButton, RoundedButton};