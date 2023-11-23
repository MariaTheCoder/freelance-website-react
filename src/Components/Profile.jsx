import style from "./Profile.module.css";

function Profile() {
  return (
    <div className={style.Profile}>
      <h1 className={style.title}>
        IBM i expertise <br />
      </h1>
      <h2>
        <em className={style.emp}>- no nonsense!</em>
      </h2>
      <p>
        My name is Kerim Güney, IBM Champion and modernization expert. I can
        asssist you in modernizing your RPG-based applications, implement modern
        technologies, and augment your existing software.
      </p>
    </div>
  );
}

export default Profile;
