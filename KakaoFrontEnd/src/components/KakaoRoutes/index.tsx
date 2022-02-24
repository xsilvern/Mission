import { Route, Routes } from "react-router-dom";
import KakaoChat from "../KakaoChat";
import KakaoFriend from "../KakaoFriend";
const KakaoRoute=()=>{
    return (<>
    <Routes>
        <Route path="/friend" element={<KakaoFriend/>}></Route>
        <Route path="/chat" element={<KakaoChat/>}></Route>
      </Routes>
    </>)
}
export default KakaoRoute;