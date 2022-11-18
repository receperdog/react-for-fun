import { useEffect, useState } from "react";

const Environment = () => {
  const [environment, setEnvironment] = useState("development");

  useEffect(() => {
    setEnvironment(process.env.NODE_ENV);
  }, []);

  return (
    <div>
      <p>
        Reactte environment variable oluşturmak için öncelikle proje dizinine
        .env.development veya .env.production dosyası oluşturulur. Bu dosyaların
        içerisine REACT_APP_ ile başlayan değişkenler tanımlanabilir. Bu
        değişkenlerin değerleri process.env.REACT_APP_ ile başlayan
        değişkenlerde kullanılabilir. Örneğin REACT_APP_API_URL değişkeni
        process.env.REACT_APP_API_URL ile kullanılabilir.
      </p>
      <p>{process.env.REACT_APP_API_URL}</p>
    </div>
  );
};
export default Environment;
