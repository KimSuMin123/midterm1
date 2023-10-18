import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Test = () => {
  const [routes, setRoutes] = useState("");

  const router = useRouter();
  const account = router.query[0];
  useEffect(() => {
    if (account && typeof account === "object" && account.length > 0) {
      setRoutes(account);
    }
  }, [account]);
  
  return <div>202130403 김수민{routes}</div>;
};

export default Test;