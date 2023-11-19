import style from "./Profile.module.css";

function Profile() {
  return (
    <div className={style.Profile}>
      <h1>
        Hi, my name is <em>Kerim Güney</em>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor
        massa sed finibus suscipit.
      </p>
      <p>
        Mauris laoreet hendrerit ipsum ac maximus. Etiam venenatis nunc sed
        neque dapibus, at mattis mauris consequat.
      </p>
      <p>
        Sed posuere augue sit amet ex molestie faucibus. Nullam commodo molestie
        neque, at laoreet libero facilisis ut.
      </p>
    </div>
  );
}

export default Profile;
