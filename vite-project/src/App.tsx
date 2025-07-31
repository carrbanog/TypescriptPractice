import { useState } from "react";
import type { UserInfo } from "./types/UserInfo";
import Form from "./Components/Form";
import Card from "./Components/Card";

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    introduce: "",
    selectedSkills: [],
  });

  console.log(userInfo);

  return (
    <div>
      {/* <Form  setUserInfo={setUserInfo} />
      <Card userInfo={userInfo} /> */}
      <Form setUserInfo={setUserInfo} />
      <Card />
    </div>
  );
}

export default App;
