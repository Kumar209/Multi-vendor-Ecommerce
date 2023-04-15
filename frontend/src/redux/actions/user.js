import axios from "axios";
import { server } from "../../server.js";

// load user
export const loadUser = () => async(dispatch) => {
    try {
        dispatch({
            type:  "LoadUserRequest",
        });
        const {data} = await axios.get(`${server}/user/getuser`, {withCredentials:true});
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LoadUserFail",
            // payload: error.response.data.message,
            payload: error.response.data,
        });
    }
}

// load seller
// export const loadSeller = () => async (dispatch) => {
//     try {
//       dispatch({
//         type: "LoadSellerRequest",
//       });
//       const { data } = await axios.get(`${server}/shop/getSeller`, {
//         withCredentials: true,
//       });
//       dispatch({
//         type: "LoadSellerSuccess",
//         payload: data.seller,
//       });
//     } catch (error) {
//       dispatch({
//         type: "LoadSellerFail",
        // payload: error.response.data.message,
        // payload: error.response.data,
//       });
//     }
//   };