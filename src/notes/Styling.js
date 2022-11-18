import styling from "../styling.module.css";

const Styling = () => {
  return (
    <div>
      <h1>Styling</h1>
      <p>
        Bir React projesine Style eklemek için öncelikle CSS dosyasını uygun bir
        alana ekliyoruz. Eğer style dosyalarımıcızı style.module.css olarak
        kaydederseniz bu dosyalar sadece bu component içinde kullanılabilir. Bu
        sayede CSS dosyalarımızın isimleri çakışmaz çünkü style dosyaları bu
        şekilde kullanıldığında farklı isimler alır. Ayrıca bu dosyaları import
        ederken de .module.css uzantısını kullanmamız gerekiyor. Bu sayede
        component based bir css yazmış oluyoruz. Aşağıdaki örnekteki gibi.
      </p>
      <h2 className={styling.background}>
        This is a background styled paragraph Ayrıca gelen CSS dosyası artık bir
        obje olarak görünmektedir.
        {styling.background}
      </h2>
    </div>
  );
};
export default Styling;
